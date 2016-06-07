import React from 'react';

const ImageFull = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render(){
    return(
      <img className="img-fluid" src={this.props.src}></img>
    )
  }
})

export default ImageFull;
