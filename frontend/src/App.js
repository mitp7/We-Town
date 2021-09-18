
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

   );
}

export default App;