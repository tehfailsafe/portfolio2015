import React from 'react';
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
    TweenMax.to(this.refs.controls, .2, { opacity: 0})
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

  componentDidMount(){
    TweenMax.delayedCall(.75, () =>{
      TweenMax.to(this.refs.controls, .3, { opacity: 1})
    })
  },

  render(){
    return(
      <div className="videoPlayer">
        <div ref="controls" style={{opacity: 0}}>
          {this.state.playing ?
            <img onClick={this.pause} src="assets/images/pause.png" className="controls pause"/>
            :
            <img onClick={this.play} src="assets/images/play.png" className="controls"/>
          }
        </div>
        {this.props.poster ?
          <video ref="video" src={`${this.props.path}/${this.props.src}`} poster={`${this.props.poster}`} className="video" loop/>
        :
          <video ref="video" src={`${this.props.path}/${this.props.src}`} className="video" loop/>
        }
      </div>
    )
  }
})

export default VideoPlayer;
