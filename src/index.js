require('./assets/styles/bootstrap.scss');
require('./assets/styles/main.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from "./App";
import About from "./components/About";
import Reel from "./components/Reel";
import Projects from "./components/projects/Projects";
import Project from "./components/projects/Project";

import {  } from 'react-router'
render(
  <Router history={browserHistory}>
    <Route path="" component={App}>
      <Route path="/" component={Projects}>
        <Route path="projects/:projectId" component={Project}/>
        <Route path="reel" component={Reel} />
      </Route>
      <Route path="about" component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
