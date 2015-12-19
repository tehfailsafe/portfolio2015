import React from 'react';
import Grid from './home/Grid';
import Header from './home/Header';

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header>&nbsp;</Header>
        <Grid />
      </div>
    )
  }
}

export default Home;
