import React from 'react';

const Section = React.createClass({
  render(){
    return(
      <div className="section">
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default Section;
