import React, { Component } from 'react';
import {Link} from 'react-router';
import Projects from './components/projects/Projects';
import Header from './components/projects/Header';

export default class App extends Component {
  render() {
    return (
      <div className="">
        <div className="nav-bar">
          <Link to="/" className="title">Mike Johnson</Link>
          <div className="nav-links">
            <Link to="/about">About</Link>
          </div>
        </div>
        {this.props.children }
      </div>
    );
  }
}
