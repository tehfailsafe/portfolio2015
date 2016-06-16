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
              Halo 4 was 343 Studios first original title in the Halo franchise. Artefact was hired to help lead the envisioning UX and design of the interface.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Motion Design</li>
                <li>Interaction Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>

        <Section>
          <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
          <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
          <ImageFull src={`${this.props.imagePath}/menu3.jpg`} />
          <VideoPlayer src={`${this.props.imagePath}/menu2.mp4`}/>
        </Section>

      </div>
    )
  }
})
