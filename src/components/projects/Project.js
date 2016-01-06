import React from 'react';
import {Link} from 'react-router';
import TweenMax from 'gsap';

import * as Content from './content'


const Project = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  setInitialState(){
    return ({
      open: false
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

  transitionIn(){
    var pos = this.props.pos
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if(!pos.hasOwnProperty("x")) pos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop, h: this.refs.container.offsetHeight, w: this.refs.container.offsetWidth}
    var containerPos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop + scrollTop}
    console.log(this.refs.container.offsetTop);

    TweenMax.set(this.refs.circle, {
      top: pos.y + pos.h / 2 - this.refs.circle.offsetHeight/2,
      left: (pos.x + pos.w / 2 - this.refs.circle.offsetWidth/2),
      scale: 0,
      backgroundColor: this.props.project.color
    })
    TweenMax.to(this.refs.circle, .75, {
      scale: 15,
      ease: Quad.easeIn
    })

    TweenMax.fromTo(this.refs.imageHolder, 0.75,
      { top: pos.y - containerPos.y, left: pos.x - containerPos.x, width: pos.w, height: pos.h},
      { width: "100%", top: 0, left: 0, height: 400, ease: Power2.easeInOut, delay: .15, onComplete: this.transitionInComplete })

    TweenMax.set(this.refs.content, {height: "auto"})
    TweenMax.from(this.refs.content, 0.8, {height: 0, ease: Power2.easeInOut, delay: 0.5})

    TweenMax.to(this.refs.circle, 0.35, {opacity: 0, delay: .75})
    TweenMax.from(this.refs.background, 0, {opacity: 0, delay: .75})
  },

  transitionOut(path){
    var pos = this.props.pos
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop
    var containerPos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop + scrollTop}
    console.log(this.refs.container.offsetTop);

    TweenMax.to(this.refs.content, 0.25, {height: 0, ease: Power2.easeOut})

    TweenMax.to(this.refs.circle, .3, {opacity: 1, onComplete: ()=>{
      TweenMax.set(this.refs.background, {opacity: 0})
    }})
    TweenMax.to(this.refs.circle, 1, {scale: 0, ease: Expo.easeOut, delay: 0.4 })
    TweenMax.to(this.refs.imageHolder, .8, { top: pos.y - containerPos.y, left: pos.x - containerPos.x, width: pos.w, height: pos.h, ease: Expo.easeOut, delay: 0.2, onComplete: ()=>{
      this.transitionOutComplete(path)
    }})
  },

  transitionInComplete(){
    this.setState({open: true})
  },

  transitionOutComplete(path){
    this.setState({open: false})
    this.context.router.push(path)
  },

  render(){
    var Subcontent = Content[this.props.project.id]

    return(
      <div style={{position:"fixed", top: 0, left: 0, width:"100%"}}>
        <div className="nav-bar">
          <Link to="/" className="back">Back</Link>
        </div>
        <div className="imageHolder">
          <img ref="background" className="backgroundImage" src={`../../assets/images/backgrounds/${this.props.project.id}.jpg`} />
        </div>
        <div ref="circle" className="circle"></div>
        <div ref="container" className="project container">
          <div className="row">
            <div ref="imageHolder" className="imageHolder">
              <img ref="thumbnail" className="img-fluid" src={`/assets/images/${this.props.project.tn}`} />
            </div>
          </div>
          <div className="row">
            <div ref="content" className="content col-xs-12">
              <Subcontent />
            </div>
          </div>
        </div>
      </div>
    )
  }

})
Project.parent = this;
export default Project;
