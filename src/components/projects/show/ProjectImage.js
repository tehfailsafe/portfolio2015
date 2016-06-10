import React from 'react';
import VideoPlayer from './VideoPlayer'

const ProjectImage = React.createClass({
  getInitialState(){
    return{
      playing: false
    }
  },
  render(){
    return(
      <div className="imageHolder">
          <VideoPlayer path={this.props.path} src="buildDemo.mp4"/>
      </div>
    )
  }
})

export default ProjectImage;
