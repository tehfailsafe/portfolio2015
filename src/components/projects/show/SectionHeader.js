import React from 'react';

const SectionHeader = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    subtitle: React.PropTypes.string,
  },
  render(){
    return(
      <div className="col-sm-12">
        <h4>{this.props.title}</h4>
      </div>
    )
  }
})

export default SectionHeader;
