import React from 'react';

const ContentSplitLeft = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
  },

  render(){
    return(
      <div className="col-sm-9">
        { this.props.title &&
          <h4>{this.props.title}</h4>
        }

        <div className="copy">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default ContentSplitLeft;
