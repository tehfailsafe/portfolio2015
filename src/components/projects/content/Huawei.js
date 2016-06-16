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
              Huawei was working on a new device, and wanted an updated lock screen. At Artefact I explored several variations of broad stroke lock screen and home screen scenarios.
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
