import React from 'react'
import particles from 'particles.js'
const Audi = React.createClass({
  render(){
    return (
      <div>
        <div className="row section">
          <div id="particles-js" className="particles"></div>
          <div className="left-column col-sm-5"><span style={{color: "red"}}>We love</span> to create simple and intuitive projects</div>
          <div className="right-column col-sm-7 roboto">We have a studio with a full range of services. Our clients are Yell, 2do2go, Naked Science, EUA, Kr. We love to create intuitive products for companies, start-ups and ordinary people like us.</div>
        </div>
        <p className="lead">
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
          Early on in the process of Halo 4, I worked with Artefact to help 343 Studios explore concepts for the main game interface.
        </p>

        <h2>Subtitle</h2>
        <p className="lead">
          Here's some more contentzzz.

        </p>
        <div className="video">
          { /* Don't load iframe until transition is complete */}
          { this.props.open &&
            <iframe src="//player.vimeo.com/video/91766052?title=0&portrait=0&badge=0&byline=0" frameBorder="0" webkitAllowfullscreen mozAllowFullScreen allowFullScreen/>
          }
        </div>
      </div>
    )
  }
})

export default Audi
