import React from 'react';
import Reel from './Reel';
import particles from 'particles.js';

const Header = React.createClass({
  getInitialState(){
    return({
      playing: false
    })
  },

  componentDidMount(){
    particlesJS.load('particles-js', 'assets/particles.json');
  },

  togglePlay(){
    this.setState({
      playing: !this.state.playing
    })
  },

  render () {

    if(this.state.playing){
      var content = (
        <Reel/>
      )
    } else {
      var content = (
        <div className="col-md-10">
          <p>Hello. My Name is Mike Johnson.</p>
          <p style={{fontSize: 24}}>I am an interaction designer specializing in motion, prototypes, and user testing.</p>
        </div>

      )
    }

    return (
      <div className="hero">
          <div id="particles-js" className="particles"></div>
          <div className="header-content">
            {content}
          </div>
      </div>

    )
  }
})

export default Header;
