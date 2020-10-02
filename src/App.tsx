import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Component1 from './Components/component1';
import Component2 from './Components/component2';
import BaseComponent from './Components/baseComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <BaseComponent />
        </Route>
        <Route path="/component2">
            <Component2 />
        </Route>
        <Route path="/component1">
            <Component1 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
