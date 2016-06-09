import React from 'react';
import Breakout from '../../Breakout';


import Section from '../show/Section'
import SectionHeader from '../show/SectionHeader'
import ContentSplitLeft from '../show/ContentSplitLeft'
import ContentSplitRight from '../show/ContentSplitRight'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

export default React.createClass({
  render(){
    return (
      <div>
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

        <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
        <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
        <ImageFull src={`${this.props.imagePath}/menu3.jpg`} />
        <VideoPlayer src={`${this.props.imagePath}/menu2.mp4`}/>
      </div>
    )
  }
})
