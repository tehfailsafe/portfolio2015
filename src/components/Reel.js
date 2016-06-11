import React from 'react';
import {Link} from 'react-router'

const Reel = React.createClass({
  render(){
    return(
      <div className="video reel-wrapper">
        <div className="reel">
          <Link to="/" ref="back" className="back">
            <img src="assets/images/back.png" className="back"/>
          </Link>
          <iframe src="//player.vimeo.com/video/45412246?title=0&portrait=0&badge=0&byline=0&width=500px&autoplay=1" frameBorder="0" autoPlay webkitAllowFullscreen mozallowFullScreen allowFullScreen></iframe>
        </div>
      </div>
    )
  }
})

export default Reel;
