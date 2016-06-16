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
              Morgans Hotel Group asked for ZAAZ to help "raise the bar" for hotel booking. They had a luxury brand but their booking experience was lacking. I worked on the interaction and motion design for the early concept phases of the project.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Interaction Design</li>
                <li>Motion Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>



      </div>
    )
  }
})
