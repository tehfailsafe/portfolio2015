import React from 'react';
import particles from 'particles.js';
import Carousel from 'nuka-carousel';
import Breakout from '../../Breakout';


import Section from '../show/Section'
import SectionHeader from '../show/SectionHeader'
import ContentSplitLeft from '../show/ContentSplitLeft'
import ContentSplitRight from '../show/ContentSplitRight'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

export default React.createClass({
  render(){
    var imagePath = "assets/images/Halo4"
    return (
      <div className="content" style={{overflow: "hidden"}}>
        <Section>
          <ContentSplitLeft title="ABOUT">
            Halo 4 was 343 Studios first original title in the Halo franchise. Artefact was hired to help lead the envisioning UX and design of the interface.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Motion Design</li>
              <li>Interaction Design</li>
            </ul>
          </ContentSplitRight>
        </Section>

        <Section>
          <SectionHeader title="Main Menu" subtitle="01"/>
        </Section>

        <ImageFull src={`${imagePath}/menu1.jpg`} />
        <ImageFull src={`${imagePath}/menu2.jpg`} />
        <ImageFull src={`${imagePath}/menu3.jpg`} />
        <VideoPlayer src={`${imagePath}/menu2.mp4`}/>
      </div>
    )
  }
})


{/*

<div className="row section">
  <div id="particles-js" className="particles"></div>
  <div className="col-sm-5 bigTitle">A<span style={{color: "red"}}> new interface</span> from the ground up.</div>
  <div className="col-sm-7 body roboto">Halo 4 is 343 Industries first original title within the Halo series—previously, development of the main series was undertaken by Bungie, the creator of the franchise. In the developmental process, 343 Industries decided to explore the Forerunner fiction within the Halo universe, leading the team to design a new setting, enemies, and main antagonist.</div>
</div>
<div className="row">
  <img className="img-fluid" src="assets/images/halo4/1.png"></img>
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

*/}
