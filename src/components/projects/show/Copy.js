import React from 'react';

const Copy = React.createClass({
  render(){
    return(
      <div className={`copy ${this.props.class || ""}`}>
        {this.props.children}
      </div>
    )
  }
})

export default Copy;
