require('./assets/styles/bootstrap.scss');
require('./assets/styles/main.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHistory, useBasename } from "history"

import App from "./App";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import Project from "./components/projects/Project";


const history = useRouterHistory(createHistory)({ basename: "/portfolio2015" })

render(
  <Router history={history}>
    <Route component={App}>
      <Route path="/" component={Projects}>
        <Route path="projects/:projectId" component={Project}/>
      </Route>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
