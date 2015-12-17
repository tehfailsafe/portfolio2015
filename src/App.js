import React, { Component } from 'react';
import Test from './Test2';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
