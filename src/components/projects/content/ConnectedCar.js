import React from 'react'

import Section from '../show/Section'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'
import CopySplitLeft from '../show/CopySplitLeft'
import CopySplitRight from '../show/CopySplitRight'
import Copy from '../show/Copy'

const Car = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <Copy class="row">
            <CopySplitLeft title="ABOUT">
              Microsoft has been supporting Ford and the SYNC in vehicle infotainment system. There have been several major version updates and I worked on the <quote>Gen 3</quote> version. Due to NDA I can't say too much about the project, but I can show the following public images and video.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Prototype</li>
                <li>User Testing</li>
                <li>Interaction Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>

        <Section title="Main Menu" >
          <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
          <Copy>
            We practiced a disciplined design led approach to ensure safety and produce measurable UI quality. User data was the lifeblood for design decisions, running monthly usability tests in our simulator.
          </Copy>


        </Section>


        <Section title="Simulator">
          <ImageFull src={`${this.props.imagePath}/simulator.jpg`} />
          <Copy>
            I helped build out and maintain a full scale driving simulator, syncing a console screen, touch enabled cluster screen, and hardware controls on the steering wheel. We also mounted hardware in vehicles and conducted usability tests on a closed track using our system while driving.
          </Copy>
        </Section>


      </div>
    )
  }
})

export default Car
