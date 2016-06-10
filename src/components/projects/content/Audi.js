import React from 'react'
import Section from '../show/Section'
import SectionHeader from '../show/SectionHeader'
import ContentSplitLeft from '../show/ContentSplitLeft'
import ContentSplitRight from '../show/ContentSplitRight'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

const Audi = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <ContentSplitLeft title="ABOUT">
            Audi wanted to bring the unparalleled new look of the A7 to life with the mantra: “A boldly designed car deserves a boldly designed world” so POSSIBLE designed an interactive billboard in Times Square, featuring the Audi A7 on 15,000 square feet of LED screens.
            <br/>
            <br/>
            I worked on the 3D visualization including texturing, lighting, rigging, and rendering.
          </ContentSplitLeft>

          <ContentSplitRight title="ROLE">
            <ul>
              <li>Motion Design</li>
              <li>3D / Texture / Render</li>
            </ul>
          </ContentSplitRight>
        </Section>

        <Section>
          <SectionHeader title="Times Square" subtitle="01"/>
        </Section>

        <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />

        <Section>
          <SectionHeader title="Social Campaign" subtitle="02"/>
          <ContentSplitLeft>
            There was also a massive social media campaign supporting the A7 redesign launch. I continued work on the 3D, motion, and interaction design.
          </ContentSplitLeft>
        </Section>
        <ImageFull src={`${this.props.imagePath}/menu3.jpg`} />
        <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
      </div>
    )
  }
})

export default Audi
