import React from 'react';
import {Link} from 'react-router';
import TweenMax from 'gsap';

import * as Content from './content'


const Project = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  getInitialState(){
    return ({
      open: false,
      scrollTop: window.pageYOffset || document.documentElement.scrollTop
    })
  },

  componentDidMount(){
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
    this.transitionIn()
  },

  routerWillLeave(nextLocation) {
    if(this.state.open){
      this.transitionOut(nextLocation.pathname)
      return false
    }
  },


  // -------------------------------------- //
  // TRANSITION IN
  // -------------------------------------- //

  transitionIn(){
    // TODO
    // Check if pros.pos is set from the previous route. If not, find the position of the thumbnail from parent
    var pos = this.props.pos
    if(!pos.hasOwnProperty("x")) pos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop, h: this.refs.container.offsetHeight, w: this.refs.container.offsetWidth}
    var containerPos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop + this.state.scrollTop}

    this.animateCircle(pos, 0.65);
    TweenMax.from(this.refs.back, .3, { opacity: 0, delay: .5})
    TweenMax.set(this.refs.header, {height: 0})
    TweenMax.to(this.refs.header, 0.5, {height: 100, y: -100, ease: Power2.easeOut, delay: 0.5})

    TweenMax.set(this.refs.content, {height: "auto"})
    TweenMax.from(this.refs.content, 0.35, {height: 0, ease: Power2.easeInOut, delay: 0.5})

    TweenMax.to(this.refs.circle, 0.55, {opacity: 0, delay: .75})
    TweenMax.from(this.refs.background, 0, {opacity: 0, delay: .75})

    TweenMax.fromTo(this.refs.projectContainer, 0.75,
      { top: pos.y - containerPos.y, left: pos.x - containerPos.x, width: pos.w, height: pos.h},
      { width: "100%", top: 0, left: 0, height: 600, ease: Power2.easeInOut, delay: 0, onComplete: this.transitionInComplete })
  },




// -------------------------------------- //
// TRANSITION OUT
// -------------------------------------- //

  transitionOut(path){
    this.setState({open: false})
    document.getElementsByTagName('body')[0].className = ""; // revove the fixed position on body to allow scrolling
    window.scrollTo(0, this.state.scrollTop) // scroll back to original scroll position

    // Need to add a delay so we can scroll the project content back to top before closing project
    var delay = 0;
    TweenMax.to(this.refs.back, .15, { opacity: 0})
    if(this.refs.projectShow.scrollTop > 0) delay = .3;
    TweenMax.to(this.refs.projectShow, .5, { scrollTop: 0, ease: Power2.easeIn});

    // TODO
    // Figure out what to do when the user is deeplinked, no props.pos comes in from parent...
    var pos = this.props.pos
    var containerPos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop + this.state.scrollTop}

    // hide content and header
    TweenMax.to(this.refs.content, 0.35, {height: 0, ease: Power2.easeOut, delay: delay})
    TweenMax.to(this.refs.header, 0.35, {height: 0, y: 0, ease: Power2.easeOut, delay: delay + .1})

    //fade circle up and hide
    TweenMax.to(this.refs.circle, .15, {opacity: 1, delay: delay, onComplete: ()=>{
      TweenMax.set(this.refs.background, {opacity: 0})
    }})

    // scale the circle back down
    TweenMax.to(this.refs.circle, .55, {scale: 0, ease: Power2.easeInOut, delay: delay + 0.15 })

    // slide the project back to it's original thumbnail position
    TweenMax.to(this.refs.projectContainer, .65, { top: pos.y - containerPos.y, left: pos.x - containerPos.x , width: pos.w, height: pos.h, ease: Power2.easeInOut, delay: delay + 0, onComplete: ()=>{
      this.transitionOutComplete(path)
    }})
  },



// -------------------------------------- //
// TRANSITION COMPLETE HANDLERS
// -------------------------------------- //

  transitionInComplete(){
    this.setState({
      open: true
    })
    // add Body class fixed position to prevent scrolling when content is open
    document.getElementsByTagName('body')[0].className = "noscroll";
    particlesJS.load('particles-js', '/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  },

  transitionOutComplete(path){


    // force router to path after transition out
    this.context.router.push(path)
  },





// -------------------------------------- //
// ANIMATE CIRCLE
// -------------------------------------- //

  animateCircle(pos, time){
    // find current scroll position
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop

    // get centerpoint of image
    var centerPoint ={ x: pos.x + pos.w/2, y: pos.y + pos.h/2 - scrollTop}

    // find distances between center and top left, top right
    var leftDistance = getDistance(centerPoint, {x: 0, y:0})
    var rightDistance = getDistance(centerPoint, {x: window.innerWidth, y:0})

    // set radius to larger distance to prevent any corner gaps
    var radius
    if(leftDistance > rightDistance){
      radius = leftDistance
    } else{
      radius = rightDistance
    }

    // set initial size and position, scaled to 0
    TweenMax.set(this.refs.circle, {
      width: radius*2,
      height: radius*2,
      top: centerPoint.y - radius,
      left: centerPoint.x - radius,

      scale: 0,
      backgroundColor: this.props.project.color
    })

    // animate scale to maintain centerpoint
    TweenMax.to(this.refs.circle, time, {
      scale: 1,
      ease: Power1.easeOut
    })
  },



// -------------------------------------- //
// RENDER
// -------------------------------------- //
  render(){
    var Subcontent = Content[this.props.project.id]

    return(
      <div style={{position:"fixed", top: 0, left: 0, width:"100%", height: "100%"}} >
          <div className="nav-bar right">
            <div ref="back" >
              <Link to="/" ref="back" >
                <img src="/assets/images/back.png" className="back"/>
              </Link>
            </div>
          </div>

          <div className="imageHolder">
            <img ref="background" className="backgroundImage" src={`/assets/images/backgrounds/${this.props.project.id}.jpg`} />
          </div>
          <div ref="circle" className="circle"></div>

          <div ref="projectShow" className="projectShow">
            <div ref="container" className="project container">
              <div  className="row">
                <div ref="projectContainer" style={{position: "relative"}}>
                  <div ref="header" className="header">
                    <div className="col-sm-12">
                      <h1>{this.props.project.title}</h1>
                    </div>
                  </div>
                  <div  className="imageHolder">
                    <img ref="thumbnail" className="img-fluid" src={`/assets/images/${this.props.project.tn}`} />
                  </div>
                  <div ref="content" className="content col-sm-12">
                    <br/><br/>
                    <Subcontent />
                  </div>
                </div>
              </div>
            </div>
          </div>


      </div>
    )
  }

})
Project.parent = this;
export default Project;

function getDistance( point1, point2 ){
  var xs = 0;
  var ys = 0;

  xs = point2.x - point1.x;
  xs = xs * xs;

  ys = point2.y - point1.y;
  ys = ys * ys;

  return Math.sqrt( xs + ys );
}