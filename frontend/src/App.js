// import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Login}> */}
          <Route exact path="/" component={Login}></Route>
          <NavBar>
            <Route path="/home" component={Home}></Route>
          </NavBar>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
