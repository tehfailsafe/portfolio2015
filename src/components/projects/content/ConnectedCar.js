import React from 'react'
import Section from '../show/Section'
import SectionHeader from '../show/SectionHeader'
import ContentSplitLeft from '../show/ContentSplitLeft'
import ContentSplitRight from '../show/ContentSplitRight'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

const Car = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <ContentSplitLeft title="ABOUT">
            Microsoft partnered with Ford to create Sync Gen3. For two years on this team my focus was building fully functional prototypes for user tests. Working with designers we would map out user goals and possible pitfalls. We would craft a scenario to test a specific usability feature and then build a believable working version for the test. I can't show much of the work due to NDA, but these images were released publicly.
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
          <VideoPlayer src={`${this.props.imagePath}/buildDemo.mp4`}/>

        </div>

        <Section>
          <SectionHeader title="Simulator" subtitle="02"/>
          <ContentSplitLeft>
            Driving safety was our primary concern and all designs had to pass the user test. To enable this I helped build out and maintain a full scale driving simulator, connecting a console screen, touch cluster screen, and hardware controls on the steering wheel. We also mounted hardware in vehicles and ran user tests on a closed track.
          </ContentSplitLeft>
        </Section>
      </div>
    )
  }
})

export default Car
