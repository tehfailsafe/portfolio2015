import React from 'react';
import YouTube from 'react-youtube';

class Header extends React.Component {
  _videoReady () {
    console.log("video ready");
  }

  render () {
    return (
      <div className="hero row">
          <img src={require('../../assets/images/hero_bg.jpg')} />
      </div>

    )
  }
}

export default Header;




<iframe className="video-iframe img-fluid" frameBorder="0" allowFullScreen="1"
  src="https://www.youtube.com/embed/WYXCjZbjPZc?modestbranding=1&showinfo=0&controls=0&autoplay=1">
</iframe>
