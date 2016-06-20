import React from 'react';
import ReactDOM from 'react-dom';
import TweenMax from 'gsap';

const VideoPlayer = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  getInitialState(){
    return{
      playing: false
    }
  },

  stop(){
    this.refs.video.load();
    this.setState({playing: false})
  },

  play(){
    this.refs.video.play();
    this.setState({playing: true})
  },

  pause(){
    this.refs.video.pause();
    this.setState({playing: false})
  },

  toggle(){
    this.state.playing ? this.refs.video.pause() : this.refs.video.play();
    this.setState({playing: !this.state.playing});
  },



  // If auto play enabled, check if video tag is on screen and play
  componentDidUpdate(params){
    if(this.props.stopAutoPlay) return;
    var boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
    if(boundingRect.top < 300 && boundingRect.top > -300){
      if(!this.state.playing) this.play();
    } else {
      if(this.state.playing) this.pause();
    }
  },

  render(){
    var controls = this.props.controls || "controls"
    return(
      <div className="videoPlayer">
        { this.props.hideControls ?
          <video ref="video" src={`${this.props.path}/${this.props.src}`} poster={this.props.poster || ""} className="video" />
        :
          <video ref="video" src={`${this.props.path}/${this.props.src}`} poster={this.props.poster || ""} className="video" controls />
        }
      </div>
    )
  }
})

export default VideoPlayer;
