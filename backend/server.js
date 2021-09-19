const express = require('express')
const app = express()
const port = 5000
const Sequelize = require("sequelize-cockroachdb");
const crypto = require('crypto');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// For secure connection to CockroachDB
const fs = require('fs');
const { default: axios } = require('axios');
 
// Connect to CockroachDB through Sequelize
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "david",
  password: "avU0IUBEtGCwCAVT",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "we-town-3667.defaultdb",
  dialectOptions: {
    ssl: {
      //For secure connection:
      ca: fs.readFileSync(path.resolve(__dirname, '../cert.crt')).toString()
    },
  },
  logging: false, 
});

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING
  },  
  city: {
    type: Sequelize.STRING
  },
  province: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING
  },
  country: {
    type: Sequelize.ENUM('Canada', 'USA')
  },
  lat: {
    type: Sequelize.FLOAT
  },
  lng: {
    type: Sequelize.FLOAT
  },
});

const Post = sequelize.define("post", {
  content: {
    type: Sequelize.TEXT,
  },
  user: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.STRING
  }
});



const hash = (user) => {
  return crypto.createHash('md5').update(getCode(user)).digest('hex');
}

const getCode = (user) => {
  return user.country === 'Canada' ? user.code.substr(0, 3) : user.code;
}

const getLatLng = async (user) => {
  let url = "https://maps.googleapis.com/maps/api/geocode/json?sensor=true&address=";
  const modifiedAddr = user.address.replace(/ /g, '+');
  const modifiedCity = user.city.replace(/ /g, '+');
  const address = `${modifiedAddr},+${modifiedCity},+${user.province}`
  const APIKey = `&key=${process.env.MAP_KEY}`
  url += address
  url += APIKey

  const res = await axios(url)

  return res.data.results[0].geometry.location;
}

app.post('/api/user/sign-up', async (req, res) => {
  //Add our POST data to CockroachDB via Sequelize
  await User.sync({force: false})
  console.log(req.body.user)
  const geo = await getLatLng(req.body.user)
  console.log(geo)
  const user = await User.create({ ...req.body.user, ...geo});
  res.status(200).json({success:true});
})

app.post('/api/user/sign-in', async (req, res) => {
  console.log(req.body.email)
  //Add our POST data to CockroachDB via Sequelize
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user && user.password == req.body.password) {
    res.json({success: true, code: hash(user)})
  } else {
    res.json({sucess:false})
  }
})

const calculateDistance = (p1, p2) => {
  var rad = function(x) {
    return x * Math.PI / 180;
  };
  
  console.log(p1)
  console.log(p2)
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat - p1.lat);
  var dLong = rad(p2.lng - p1.lng);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  console.log(d)
  return (d / 1000).toFixed(2);; // returns the distance in km

}

app.post('/api/post/list', async (req, res) => {
  console.log(req.body.user)
  //Add our POST data to CockroachDB via Sequelize
  const posts = await Post.findAll({ where: { code: getCode(req.body.user) } });
  const toReturn = [];
  for (const post of posts) {
    const user = await User.findOne({ where: { email: req.body.user.email } });
    const poster = await User.findOne({ where: { email: post.user } });
    const dist = calculateDistance(
      { lat: poster.lat, lng: poster.lng },
      { lat: user.lat, lng: user.lng }
    )
    toReturn.push({...post.toJSON(), distance: dist})
  }
  res.json(toReturn);
})

app.post('/api/post/create', async (req, res) => {
  //Add our POST data to CockroachDB via Sequelize
  await Post.sync({force: false})
  const post = await Post.create({ content: req.body.content, code: getCode(req.body.user), user: req.body.user.email });
  res.json(post.toJSON());
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})