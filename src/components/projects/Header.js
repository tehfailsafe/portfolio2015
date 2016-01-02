import React from 'react';


class Header extends React.Component {
  render () {
    return (
      <div className="hero row">
          <img src={require('../../assets/images/hero_bg.jpg')} />
      </div>

    )
  }
}

export default Header;
