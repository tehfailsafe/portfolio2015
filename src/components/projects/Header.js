import React from 'react';

const Header = React.createClass({
  getInitialState(){
    return({
      playing: false
    })
  },

  togglePlay(){
    this.setState({
      playing: !this.state.playing
    })
  },

  render () {
    if(this.state.playing){
      var content = (
        <div>
          <div className="skrim"></div>
          <div className="video">
            <div className="nav-bar">
              <span className="back" onClick={this.togglePlay}>Back</span>
            </div>
            <iframe  src="//player.vimeo.com/video/45412246?title=0&portrait=0&badge=0&byline=0&width=500px" frameBorder="0" webkitAllowFullscreen mozallowFullScreen allowFullScreen></iframe>
          </div>
        </div>
      )
    } else {
      var content = (
        <div>
          <img onClick={this.togglePlay} src="assets/images/play_icon.png" style={{marginBottom: 30, width: "20%", cursor: "pointer"}}/>
          <p className="lead">UX Designgeneer based in Seattle</p>
        </div>
      )
    }

    return (
      <div className="hero row">
          <div className="container">
            {content}
          </div>
      </div>

    )
  }
})

export default Header;
