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
              In 2013 Coca-Cola said goodbye to their corperate website and made the transition to brand publishing with the Coca-Cola Journey website.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Motion Design</li>
              </ul>
            </CopySplitRight>

          </Copy>
        </Section>

        <Section>
          <ImageFull src={`${this.props.imagePath}/journey1.jpg`} />
          <Copy>
            I helped ZAAZ create a world class experience for this global brand. I was responsible for the motion design and helped breath life into the site.
            We really wanted to push the boundaries of HTML5 and make a rich, engaging site.
          </Copy>
        </Section>

        <Section>
          <ImageFull src={`${this.props.imagePath}/journey2.jpg`} />
          <ImageFull src={`${this.props.imagePath}/journey3.jpg`} />
        </Section>

      </div>
    )
  }
})

export default Audi
