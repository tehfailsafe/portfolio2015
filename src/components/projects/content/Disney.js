import React from 'react';

import Section from '../show/Section'
import CopySplitLeft from '../show/CopySplitLeft'
import CopySplitRight from '../show/CopySplitRight'
import Copy from '../show/Copy'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

export default React.createClass({
  render(){
    return (
      <div>
        <Section>
          <Copy class="row">
            <CopySplitLeft title="ABOUT">
              I helped create the motion design for the "My Disney Experience" app for iOS and Android. This was a compilation version that helped sell the design to stakeholders pointing out the differences between in-park experience and at home, before the vacation.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Motion Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>
      </div>
    )
  }
})
