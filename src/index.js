import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import CreateBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route } from 'react-router'

import App from "./App";
import Test from "./Test2";


const history = CreateBrowserHistory();

render(
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path='/test' component={Test}>

      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
)
