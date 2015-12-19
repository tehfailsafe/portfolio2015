import React from 'react';

class Header extends React.Component{
  render(){
    var style = {


    }
    return(
      <div className="hero">
        <h1>Header</h1>
          <button className="btn btn-primary" type="button">
            Messages <span className="badge">4</span>
          </button>
          <span className="fonticon fonticon-search" aria-hidden="true"></span>
      </div>
    )
  }
}

export default Header;
