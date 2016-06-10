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
            Morgans Hotel Group asked for ZAAZ to help "raise the bar" for hotel booking. They had a luxury brand but their booking experience was lacking. I worked on the interaction and motion design for the early concept phases of the project.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Interaction Design</li>
              <li>Motion Design</li>
            </ul>
          </ContentSplitRight>
        </Section>

      

      </div>
    )
  }
})
