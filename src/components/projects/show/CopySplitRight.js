import React from 'react';

const temp = React.createClass({
  render(){
    return(
      <div className="col-sm-3">
        <h4>{this.props.title}</h4>
        {this.props.children}
      </div>
    )
  }
})

export default temp;
