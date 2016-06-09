import React from 'react';
import Packery from 'packery';
import {Link} from 'react-router';
import imagesLoaded from 'imagesloaded';
import TweenMax from 'gsap';

const Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

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
    imagesLoaded( this.refs.grid, () => {
      this.state.packary.layout();
    })

    this.setState({
      packary: new Packery(this.refs.grid, {
        itemSelector: ".item",
        transitionDuration: "0s",
        gutter: 0
      })
    })
  },

  componentWillReceiveProps(props){
    if(!props.params.projectId) return
    var activeItem = this.refs[props.params.projectId]
    this.setState({
      activeItem: activeItem,
      originalPos: this.getPos(activeItem),
    })
  },


  render(){
		var projectId = this.props.params.projectId
    var projects = this.getJson().map((project) => {
      var isActive = false
      var projectPath = `assets/images/${project.id}`;

			if(this.props.params.projectId){
				isActive = this.props.params.projectId == project.id;
			}

      return(
				<div ref={project.id}  key={project.id} className={`item col-sm-4 col-xs-12 col-xl-3 ${isActive ? "active" : ""}`}>
					<Link to={isActive ? '/' : '/projects/' + project.id} activeClassName="open">
            <img src={`${projectPath}/hero.jpg`} className="thumbnail"/>
					</Link>
            {isActive ? React.cloneElement(this.props.children, { project: project, pos: this.state.originalPos  }): null}
				</div>
      )
    })

    return(
      <div className="projects-index">
        <div ref="grid" className='row no-gutters grid'>
          {projects}
        </div>
      </div>
    )
  },

  getJson(){
    return ([
      {
        'id': 'Audi',
        'color': '#aa162e'
      },
      {
        'id': 'ConnectedCar',
        'color': '#2e599d'
      },
      {
        'id': 'CokeJourney',
        'color': '#800005'
      },
      {
        'id': 'Halo4',
        'color': '#5B45C2'
      },
      {
        'id': 'Disney',
        'color': '#3292db'
      },
      {
        'id': 'AlterEgo',
        'color': '#3292db'
      },
      {
        'id': 'XBOX',
        'color': '#A8BF24'
      },
      {
        'id': 'Zune',
        'color': '#EC31F3'
      },
      {
        'id': 'Huawei',
        'color': '#18A1E0'
      },
      {
        'id': 'HTC',
        'color': '#97C642'
      },

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
