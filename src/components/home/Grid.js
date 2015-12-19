import React from 'react';
import packery from 'packery';

class Grid extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      grid: null,
      pckry: null
    }
  }

  componentDidMount(){
    this.state.grid = document.querySelector('.grid');
    this.state.pckry = new packery(this.state.grid, {
      itemSelector: ".item",
      gutter: 10
    })
    this.state.pckry.layout();
  }

  componentDidUpdate(){
    this.state.pckry.layout();
  }


  render(){
    var style = {height: 200, width:200, backgroundColor:'#333'};

    return(
      <div className="grid">
        <h2>Packery</h2>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
        <div style={style} className="item"></div>
      </div>
    )
  }
}

export default Grid;
