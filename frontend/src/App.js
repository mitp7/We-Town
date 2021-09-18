
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

   );
}

export default App;