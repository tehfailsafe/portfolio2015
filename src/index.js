import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route } from 'react-router'

import App from "./App";
import Test from "./Test2";


const history = useBasename(createHistory)({
  basename: '/portfolio2015'
})

render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Test}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
