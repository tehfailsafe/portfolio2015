import React from 'react';
import Packery from 'packery';
import {Link} from 'react-router';
import imagesLoaded from 'imagesloaded';
import TweenMax from 'gsap';

import Header from './Header';

const Index = React.createClass({
  getInitialState() {
    return({
      packary: null,
      active: null,
      globalPos: {},
      originalPos: {},
			open: false
    })
  },

	componentDidMount(){
    imagesLoaded( this.refs.projectsGrid, () => {
      this.state.packary.layout();
    })

    this.setState({
      packary: new Packery(document.querySelector('.grid'), {
        itemSelector: ".item",
        transitionDuration: "0s"
      })
    })
  },

  componentWillReceiveProps(props){
    if(props.params.projectId){
      var activeItem = this.refs[props.params.projectId]
      this.setState({
        activeItem: activeItem,
        originalPos: {x: activeItem.offsetLeft, y: activeItem.offsetTop, h: activeItem.offsetHeight, w: activeItem.offsetWidth},
        gridPos: this.getPos(this.refs.projectsGrid)
      })
    }
  },

  componentDidUpdate(){
    // if we're on a project route and not already open, open it
    if(this.props.params.projectId && !this.state.open){
      this.openItem();
		}

    // if we're at projects index and there is an open item, transition it
		if(!this.props.params.projectId && this.state.open){
      this.closeItem();
		}
  },

  openItem(){
    var pos = this.state.originalPos
    TweenMax.set(this.refs.circle, {css:{zIndex: 2, top: pos.y + pos.h / 2 - 100, left: pos.x + pos.w / 2 - 100, scale: 0}})
    TweenMax.set(this.state.activeItem, {css: {zIndex: 3}})

    TweenMax.to(this.refs.circle, .45, { scale: 15, borderRadius: 0, ease: Circ.easeIn, onComplete: () => {
      this.setState({open: true})
    }});

    var delay = 0.3
    TweenMax.to(this.state.activeItem, .8, {left: 0, top: 200, ease:Power2.easeInOut, delay: delay})
    TweenMax.set(this.refs.projectsGrid, {css: {top: this.state.gridPos.y, position: "fixed", delay: delay}})
    TweenMax.to(this.refs.projectsGrid, .8, {top: 0, ease: Power2.easeInOut, delay: delay})
    this.state.packary.unbindResize()
  },

  closeItem(){
    var pos = this.state.originalPos
    TweenMax.to(this.refs.circle, .6, {scale: 0.1, ease: Power2.easeOut, delay: .5, borderRadius: "100%", onComplete: () =>{
      TweenMax.set(this.refs.circle, {css: {zIndex: 0}})
      TweenMax.set(this.state.activeItem, {css: {zIndex: 1}})
			this.setState({open: false})
    }})
		TweenMax.to(this.state.activeItem, .75, {top: pos.y, left: pos.x, ease: Power2.easeInOut})
    TweenMax.set(this.refs.projectsGrid, {css: {top: -this.state.gridPos.y, position: "relative"}})
    TweenMax.to(this.refs.projectsGrid, .75, {top: 0, ease: Power2.easeInOut})
  },

  render(){
		var projectId = this.props.params.projectId
    var projects = this.getJson().map((project) => {
			var isActive = false
			if(this.props.params.projectId){
				isActive = this.props.params.projectId == project.id;
			}

      return(
				<div ref={project.id} key={project.id} className="item col-sm-4 col-xs-12">
					<Link to={isActive ? '/' : '/projects/' + project.id} activeClassName="open">
            <img src={`/assets/images/${project.tn}`} className="thumbnail"/>
					</Link>
					{isActive ? React.cloneElement(this.props.children, { project: project }): null}
				</div>
      )
    })

    return(
      <div className="projects-index">
        <Header />
        <div ref="projectsGrid" className="projectsGrid">
          <div className="circle" ref="circle"/>
          <div className='row grid'>
            {projects}
          </div>
        </div>
      </div>
    )
  },

  getJson(){
    // placeholder for remote api call later
    return ([
      {
        'id': '1',
        'title': 'Audi',
        'tn': 'audi-a7-times-square-v2.jpg'
      },
      {
        'id': '2',
        'title': 'Microsoft Connected Car',
        'tn': 'car-distractions.jpg'
      },
      {
        'id': '3',
        'title': 'Coke Journeys',
        'tn': 'cokeJourney.jpg'
      },
      {
        'id': '4',
        'title': 'Halo 4',
        'tn': 'halo4-hero.jpg'
      }

    ])
  },

  getPos(el) {
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    var scroll = window.pageYOffset;
    var zindex = document.defaultView.getComputedStyle(el).getPropertyValue('z-index');
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);

    return {x: lx, y: ly, w: width, h:height, z:parseInt(zindex)};
  }
})


export default Index;
