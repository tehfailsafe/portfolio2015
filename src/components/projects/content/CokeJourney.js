import React from 'react'
import Section from '../show/Section'
import SectionHeader from '../show/SectionHeader'

import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

const Audi = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <ContentSplitLeft title="ABOUT">
            In 2013 Coca-Cola said goodbye to their corperate website and made the transition to brand publishing with the Coca-Cola Journey website.
            <br/><br/>
            I was on board to help ZAAZ create a world class experience for this global brand. I was responsible for the motion design and helped breath life into the site.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Motion Design</li>
            </ul>
          </ContentSplitRight>
        </Section>

        <Section>
        </Section>
        <div>
          <ImageFull src={`${this.props.imagePath}/journey1.jpg`} />
          <ImageFull src={`${this.props.imagePath}/journey2.jpg`} />
          <ImageFull src={`${this.props.imagePath}/journey3.jpg`} />
        </div>

      </div>
    )
  }
})

export default Audi
