import React from 'react';
import packery from 'packery';
import {Link} from 'react-router';

import Project from './Project';
import Header from './Header';

import TweenMax from 'gsap';

class Index extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      pckry: null
    }
  }

  componentDidMount(){
    var grid = document.querySelector('.grid')

    this.setState({
      pckry: new packery(grid, {
        itemSelector: ".item",
        gutter: 0,
        transitionDuration: "0s"
      })
    })
  }

  componentDidUpdate(){
    // this.state.pckry.layout();
  }

  render(){
    var projects = this.getJson().map((project) => {
      return(
        <Project
          project={project}
          parent={this.refs.grid}
          pckry={this.state.pckry}
          key={project.id}
          tnPath={project.tn}
        />
      )
    });

    return(
      <div >
        <Header />
        <div ref="grid" className="row grid row-no-gutter">
          {projects}
        </div>
      </div>
    )
  }

  getJson(){
    // placeholder for remote api call later
    return ([
      {
        'id': '1',
        'title': 'Audi',
        'tn': "assets/images/audi-a7-times-square-v2.jpg"
      },
      {
        'id': '2',
        'title': 'Audi',
        'tn': "assets/images/car-distractions.jpg"
      },
      {
        'id': '3',
        'title': 'Audi',
        'tn': "assets/images/halo4-hero.jpg"
      },
      {
        'id': '4',
        'title': 'Audi',
        'tn': "assets/images/cokeJourney.jpg"
      }

    ])
  }

}

export default Index;
