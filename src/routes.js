import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute } from 'react-router'

import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Grid from "./components/home/Grid";


const history = useBasename(createHistory)({
  basename: '/portfolio2015'
})

render(
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}>
        <IndexRoute component={Grid} />
      </IndexRoute>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
