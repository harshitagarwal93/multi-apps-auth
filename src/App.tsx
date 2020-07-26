import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Component1 from './component1';
import Component2 from './component2';
import BaseComponent from './baseComponent';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <BaseComponent />
        </Route>
        <Route path="/def">
            <Component2 />
        </Route>
        <Route path="/abc">
            <Component1 />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
