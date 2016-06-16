import React from 'react'
import Section from '../show/Section'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

const Audi = React.createClass({
  render(){
    return (
      <div>
        <Section>
          <div className="col-sm-9 copy">
            <h4>ABOUT</h4>
            Audi wanted to bring the unparalleled new look of the A7 to life with the mantra: <i>“A boldly designed car deserves a boldly designed world”</i> so we designed an interactive billboard in Times Square, featuring the Audi A7 on 15,000 square feet of LED screens.
            <br/>
            <br/>
          </div>

          <div className="col-sm-3 copy">
            <h4>ROLE</h4>
            <ul>
              <li>3D</li>
              <li>Motion Design</li>
              <li>Interaction Design</li>
            </ul>
          </div>

        </Section>

        <Section title="Times Square">
          <ImageFull src={`${this.props.imagePath}/menu1.jpg`} />
          <div className="copy">
            Interfacing with <quote>The New Blank</quote> I was responsible for the 3D visualization including texturing, lighting, rigging, and rendering.
          </div>
        </Section>



        <Section title="Social Campaign" >
          <ImageFull src={`${this.props.imagePath}/menu2.jpg`} />
          <div className="col-sm-9 copy">
            There was also a massive social media campaign supporting the A7 redesign launch. I continued work on the 3D, motion, and interaction design.
          </div>
        </Section>
      </div>
    )
  }
})

export default Audi
