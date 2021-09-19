// import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NavBar from "./components/navBar";
import SignUp from "./pages/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Login}> */}
          <Route exact path="/" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
          
          <NavBar>
            <Route path="/home" exact component={Home}></Route>
          </NavBar>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
