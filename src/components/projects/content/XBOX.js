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
            XBOX asked ZAAZ for assistance in creating a new dashboard interface from the ground up.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Interaction Design</li>
              <li>Motion Design</li>
            </ul>
          </ContentSplitRight>
        </Section>

        <Section>
          <SectionHeader title="Main Menu" subtitle="01"/>
        </Section>
        <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
        <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
        <ImageFull src={`${this.props.imagePath}/menu3.jpg`} />
      </div>
    )
  }
})
