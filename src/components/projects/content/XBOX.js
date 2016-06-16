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
              XBOX asked ZAAZ for assistance in creating a new dashboard interface from the ground up.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Interaction Design</li>
                <li>Motion Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>

        <Section title="Main Menu">
          <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
          <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
          <ImageFull src={`${this.props.imagePath}/menu3.jpg`} />
        </Section>
      </div>
    )
  }
})
