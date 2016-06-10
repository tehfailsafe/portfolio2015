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
            I helped create the motion design for the "My Disney Experience" app for iOS and Android. This was a compilation version that helped sell the design to stakeholders pointing out the differences between in-park experience and at home, before the vacation.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Motion Design</li>
            </ul>
          </ContentSplitRight>
        </Section>
      </div>
    )
  }
})
