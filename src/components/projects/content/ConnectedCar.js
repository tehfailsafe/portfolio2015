import React from 'react'
import Section from '../show/Section'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

const Car = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <ContentSplitLeft title="ABOUT">
            The Microsoft Connected Car UX team followed a disciplined design led engineering approach to ensure safety and produce measurable UI quality. User data was the lifeblood for driving design decisions, running monthly usability tests in our full scale driving simulator.
            <br/>
            <br/>
            I was brought on for two years to produce fully functional interactive prototypes for user tests, working with the designer to iterate and improve the designs.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Prototype</li>
              <li>User Testing</li>
              <li>Interaction Design</li>
            </ul>
          </ContentSplitRight>
        </Section>

        <Section>
          <SectionHeader title="Main Menu" subtitle="01"/>
        </Section>
        <div>
          <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
          <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
          <ImageFull src={`${this.props.imagePath}/menu3.jpg`} />
        </div>

        <Section>
          <SectionHeader title="Simulator" subtitle="02"/>
          <ContentSplitLeft>
            I helped build out and maintain a full scale driving simulator, syncing a console screen, touch enabled cluster screen, and hardware controls on the steering wheel. We also mounted hardware in vehicles and ran user tests on a closed track.
          </ContentSplitLeft>
        </Section>

        <ImageFull src={`${this.props.imagePath}/simulator.jpg`} />
        <div style={{height: 500}}></div>

      </div>
    )
  }
})

export default Car
