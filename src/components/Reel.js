import React from 'react';

const Reel = React.createClass({
  render(){
    return(
      <div className="video">
        <iframe src="//player.vimeo.com/video/45412246?title=0&portrait=0&badge=0&byline=0&width=500px" frameBorder="0" webkitAllowFullscreen mozallowFullScreen allowFullScreen></iframe>
      </div>
    )
  }
})

export default Reel;
