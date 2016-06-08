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
              <Link to="/about">About</Link>
              <Link to="/reel">Reel</Link>
              <Link to="/">Work</Link>
            </div>
          </div>
        </div>
        <Header />
        {this.props.children }
      </div>
    );
  }
}
