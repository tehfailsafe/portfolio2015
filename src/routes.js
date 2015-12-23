import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute } from 'react-router'

import Home from "./App";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Project from "./components/projects/Project";


const history = useBasename(createHistory)({
  basename: '/portfolio2015'
})

render(
  <Router history={history}>
    <Route path="/" component={Home}>
      <IndexRoute component={Projects} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
