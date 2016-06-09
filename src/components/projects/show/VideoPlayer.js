import React from 'react';

const VideoPlayer = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },
  render(){
    return(
      <video src={`${this.props.path}/${this.props.src}`} controls poster={`${this.props.path}/hero.jpg`} className="video"/>
    )
  }
})

export default VideoPlayer;
