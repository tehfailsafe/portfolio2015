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
      thumbnailStyle: {},
      backgroundStyle: {}
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize.bind(this));
    imagesLoaded( document.querySelector('.projectContainer'), () => {
      this.props.pckry.layout();
      this.pos = this.getPos(this.refs.thumbnail);
      this.setState({
        containerStyle: {height: this.pos.h},
        backgroundStyle: {height: this.pos.h, width: this.pos.w}
      })
      console.log(this.refs);
      TweenMax.set(this.refs.project, {perspective:800});
      TweenMax.set(this.refs.thumbnailContainer, {transformStyle: "preserve-3d"})
      TweenMax.set(this.refs.background, {rotationY:-180})
      TweenMax.set([this.refs.background, this.refs.thumbnail], {backfaceVisibility: "hidden"})
    });
  }

  handleResize(){
    this.pos = this.getPos(this.refs.thumbnailContainer);
    this.setState({
      containerStyle: {height: this.pos.h}
    })
    this.props.pckry.layout();
  }

  onClick(e){
    if(!this.state.open){
      this.pos = this.getPos(this.refs.project);

      this.setState({
        containerStyle: { zIndex: 100, top: 0, left: 0, width: "100vw", height: "100vh", position: "fixed" },
        thumbnailStyle:{ width: this.pos.w, top: this.pos.y, left: this.pos.x, position: "absolute"},
        backgroundStyle: {width: "100%", height: "100%"},
        open: true
      })

      // TweenMax.fromTo(this.refs.circle, 1.8, {top: this.pos.y + this.pos.h - 100, left: this.pos.x + this.pos.w - 100, scale: 1},  { scale: 25, ease: Power2.easeOut });
      TweenMax.to(this.refs.thumbnailContainer, .75, { width: "80%", left: "10%", top: "10%", rotationY: 180, ease: Power2.easeInOut})
    } else {
      TweenMax.to(this.refs.thumbnailContainer, .5, { rotationY: 0, width: this.pos.w, top: this.pos.y, left: this.pos.x, ease: Power2.easeOut})
      TweenMax.to(this.refs.circle, .5, {scale: 0, ease: Power2.easeOut, onComplete:()=> {
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
      <div ref="project" className="item col-sm-4 col-xs-12 projectContainer" style={this.state.containerStyle} onClick={this.onClick.bind(this)}>
        <div ref="thumbnailContainer" className="thumbnailContainer" style={this.state.thumbnailStyle} >
          <div ref="background" style={this.state.backgroundStyle} className="white-bg"></div>
          <img ref="thumbnail" className="thumbnail img-fluid"  src={this.props.project.tn} />
        </div>
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
