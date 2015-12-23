import React from 'react';
import {Link} from 'react-router';
import TweenMax from 'gsap';
import imagesLoaded from 'imagesloaded';

class Project extends React.Component{
  constructor(props) {
    super(props);
    var pos ={};
    this.state = {
      open: false,
      containerStyle: {},
      thumbnailStyle: {}
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this));
    imagesLoaded( document.querySelector('.projectContainer'), () => {
      this.props.pckry.layout();
      this.pos = this.getPos(this.refs.thumbnail);
      this.setState({
        containerStyle: {height: this.pos.h}
      })
    });
  }

  handleResize(){
    this.pos = this.getPos(this.refs.thumbnail);
    this.setState({
      containerStyle: {height: this.pos.h}
    })
    this.props.pckry.layout();
  }

  onClick(e){
    var container = this.refs.project;
    var circle = this.refs.circle;
    var thumbnail = this.refs.thumbnail;

    if(!this.state.open){
      this.pos = this.getPos(container);
      console.log(this.pos);
      this.setState({
        containerStyle: { zIndex: 100, top: 0, left: 0, width: "100vw", height: "100vh", position: "fixed" },
        thumbnailStyle:{ width: this.pos.w, top: this.pos.y, left: this.pos.x, position: "absolute"},
        open: true
      })
      TweenMax.fromTo(circle, 1, {top: this.pos.y + this.pos.h / 2, left: this.pos.x + this.pos.w/2},  { scale: 50, ease: Quad.easeOut });
    } else {
      TweenMax.to(circle, .5, {scale: 1, ease: Expo.easeOut, onComplete:()=> {
        this.setState({
          containerStyle: { zIndex: this.pos.z, top: this.pos.y - this.getPos(this.props.parent).y, left: this.pos.x, height: this.pos.h, position: "absolute" },
          thumbnailStyle: {top: 0, left: 0},
          open: false
        })
      }});
    }
  }

  render(){
    var thumbnailClass = this.state.open ? "thumbnail" : "thumbnail img-fluid"
    return(
      <div ref="project" className="projectContainer item col-sm-4" style={this.state.containerStyle} onClick={this.onClick.bind(this)}>
        <img ref="thumbnail" className={thumbnailClass} style={this.state.thumbnailStyle} src={this.props.project.tn} />
        <div ref="circle" className="circle"/>
      </div>
    )
  }

  getPos(el) {
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    var scroll = window.pageYOffset;
    console.log(scroll);
    var zindex = document.defaultView.getComputedStyle(el).getPropertyValue('z-index');
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);

    return {x: lx,y: ly - scroll, w: width, h:height, z:parseInt(zindex)};
  }
}

export default Project;
