import React from 'react'

import Section from '../show/Section'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'
import CopySplitLeft from '../show/CopySplitLeft'
import CopySplitRight from '../show/CopySplitRight'
import Copy from '../show/Copy'

const Audi = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <Copy class="row">
            <CopySplitLeft title="ABOUT">
              Audi wanted to bring the unparalleled new look of the A7 to life with the mantra: <quote>“A boldly designed car deserves a boldly designed world”</quote> so we designed an interactive billboard in Times Square, featuring the Audi A7 on 15,000 square feet of LED screens.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>3D</li>
                <li>Motion Design</li>
                <li>Interaction Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>

        <Section title="Times Square">
          <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
          <Copy>
            Interfacing with <quote>The New Blank</quote> I was responsible for the 3D visualization including texturing, lighting, rigging, and rendering.
          </Copy>
        </Section>



        <Section title="Social Campaign" >
          <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
          <Copy>
            There was also a massive social media campaign supporting the A7 redesign launch. I continued work on the 3D, motion, and interaction design.
          </Copy>
        </Section>
      </div>
    )
  }
})

export default Audi
