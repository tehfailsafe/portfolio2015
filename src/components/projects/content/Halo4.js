import React from 'react';
import particles from 'particles.js';
import Carousel from 'nuka-carousel';
import Breakout from '../../Breakout';

export default React.createClass({
  render(){
    return (
      <div>
        <div className="row section">
          <div id="particles-js" className="particles"></div>
          <div className="col-sm-5 bigTitle"><span style={{color: "red"}}>We love</span> to create simple and intuitive projects</div>
          <div className="col-sm-7 body roboto">We have a studio with a full range of services. Our clients are Yell, 2do2go, Naked Science, EUA, Kr. We love to create intuitive products for companies, start-ups and ordinary people like us.</div>
        </div>
        <div className="row section">
          <div className="col-sm-9">
            <div className="montserrat bodyHeader">About</div>
            <div className="roboto body">
              This is some content that will go in this section, and some more, etc.
            </div>
          </div>
          <div className="col-sm-3">
            <div className="montserrat bodyHeader">Roles</div>
            <div className="roboto body">
              Motion Design
              Interaction Design

            </div>
          </div>
        </div>
        <div className="row section">

            <div className="video" style={{paddingTop: "56%"}} >
              { /* Don't load iframe until transition is complete */}
              { this.props.open &&
                <iframe src="//player.vimeo.com/video/91766052?title=0&portrait=0&badge=0&byline=0" frameBorder="0" webkitAllowfullscreen mozAllowFullScreen allowFullScreen/>
              }
            </div>

        </div>

        <div className="row section">
          <Breakout>
            <div style={{width: "100%", backgroundColor: "red"}} >
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <Carousel>
                      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
                      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
                      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
                      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
                      <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
                    </Carousel>

                  </div>
                </div>

              </div>
            </div>
          </Breakout>



        </div>
      </div>
    )
  }
})
