import React from 'react';
import VideoPlayer from './VideoPlayer'

const ProjectImage = React.createClass({
  stop(){
    this.refs.player.stop();
  },

  getInitialState(){

    return{
      playing: false
    }
  },


  render(){
    return(
      <div className="imageHolder">
        <VideoPlayer ref="player" path={this.props.path} src="hero.mp4"/>
      </div>
    )
  }
})

export default ProjectImage;
