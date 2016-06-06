import React from 'react';

const Breakout = React.createClass({
  render(){
    return(
      <div style={{width: "100vw", left: "50%",position:"relative"}}>
        <div style={{marginLeft: "auto", marginRight: "auto", left: "-50%", maxWidth: "100%", position: "relative"}}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Breakout;
