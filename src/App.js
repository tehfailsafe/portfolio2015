import React, { Component } from 'react'
import {Link} from 'react-router'
// import {VictoryPie} from 'victory'

import Projects from './components/projects/Projects';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div className="" style={{overflow: "none"}}>
        <div className="nav-bar">
          <Link to="/" className="title">Mike Johnson</Link>
          <div className="nav-links">
            <Link to="/about">About</Link>
          </div>
        </div>
        <Header />
        {this.props.children }
      </div>
    );
  }
}
