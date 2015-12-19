import React, { Component } from 'react';
import {Link} from 'react-router';
import Home from './components/Home';

require('./assets/styles/main.scss');

export default class App extends Component {
  render() {
    return (
      <div>
        <div style={{position: "absolute", zIndex: "100", height: "64px"}}>
          <h4>Mike Johnson</h4>
          <Link to="about">About</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
