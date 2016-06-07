import React from 'react';

const VideoPlayer = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },
  render(){
    return(
      <video src={this.props.src} muted autoPlay loop/>
    )
  }
})

export default VideoPlayer;
