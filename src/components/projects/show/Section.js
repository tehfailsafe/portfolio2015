import React from 'react';

const Section = React.createClass({
  render(){
    return(
      <div className="section row">
        { this.props.title &&
          <div className="copy">
            <h4>{this.props.title}</h4>
          </div>
        }

          {this.props.children}
  
      </div>
    )
  }
})

export default Section;
