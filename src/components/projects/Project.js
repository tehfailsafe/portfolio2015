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
    if(!pos.hasOwnProperty("x")) pos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop, h: this.refs.container.offsetHeight, w: this.refs.container.offsetWidth}
    var containerPos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop}

    TweenMax.set(this.refs.circle, {
      top: pos.y + pos.h / 2 - this.refs.circle.offsetHeight/2,
      left: (pos.x + pos.w / 2 - this.refs.circle.offsetWidth/2),
      scale: 0
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
  },

  transitionOut(path){
    var pos = this.props.pos
    var containerPos = {x: this.refs.container.offsetLeft, y: this.refs.container.offsetTop}
    TweenMax.to(this.refs.content, 0.5, {height: 0, ease: Power2.easeOut})
    TweenMax.to(this.refs.imageHolder, .5, { top: pos.y - containerPos.y, left: pos.x - containerPos.x, width: pos.w, height: pos.h, delay: .3})
    TweenMax.to(this.refs.circle, .5, {scale: 0, ease: Power2.easeOut, delay: 0.5, onComplete: ()=>{
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
