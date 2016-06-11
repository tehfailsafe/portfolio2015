import React, { Component } from 'react'
import {Link} from 'react-router'
// import {VictoryPie} from 'victory'

import Projects from './components/projects/Projects';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar container-fluid">
          <div className="nav-links">
            <div className="right">
              <Link to="/reel">Reel</Link>
              <a href="/portfolio/assets/resume.pdf">Resume</a>
              <a href="mailto:mike@failsafedesign.com">Contact</a>
            </div>
          </div>
        </div>
        {this.props.children }
      </div>
    );
  }
}
