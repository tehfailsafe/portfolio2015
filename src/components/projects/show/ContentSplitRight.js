import React from 'react';

const ContentSplitRight = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render(){
    return(
      <div className="col-sm-4 col-sm-offset-1">
        <h4>{this.props.title}</h4>
        <div className="copy">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default ContentSplitRight;
