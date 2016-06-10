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

  hasVideo(){
    if(this.refs.temp){
      console.log(":refs", this.refs.temp);
    }
  },

  render(){
    return(
      <div className="imageHolder">
        <img ref="temp" />
          <VideoPlayer ref="player" path={this.props.path} src="hero.mp4"/>
      </div>
    )
  }
})

export default ProjectImage;
