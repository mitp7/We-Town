// import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import NavBar from "./components/navBar";
import SignUp from "./pages/signup";
import * as serviceWorker from './serviceWorker'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar> 
          <Route path="/home" component={Home}></Route>
        </NavBar>
        <Switch>          
          <Route path="/signin" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

serviceWorker.unregister();