import React from 'react';
import {Link} from 'react-router';
import TweenMax from 'gsap';
import imagesLoaded from 'imagesloaded';

class Project extends React.Component{
  render(){
    return(
      <h1>{this.props.project.title}</h1>
    )
  }

}

export default Project;
