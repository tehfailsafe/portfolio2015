import React from 'react';

import Section from '../show/Section'
import CopySplitLeft from '../show/CopySplitLeft'
import CopySplitRight from '../show/CopySplitRight'
import Copy from '../show/Copy'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

export default React.createClass({
  render(){
    var projectPath = this.props.imagePath;
    return (
      <div>
        <Section>
          <Copy class="row">
            <CopySplitLeft title="ABOUT">
              XBOX needed an refresh and update to their interface. In 2008 they reached out to ZAAZ for assistance in creating a new dashboard interface from the ground up.
              <br/><br/>
              I worked along side another designer to completely re-imagine the entire interface, including interaction, motion, and concept design. I worked directly with the client in 1 week sprints to understand their current problems and provide blue sky solutions with a fresh eye.
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Interaction Design</li>
                <li>Motion Design</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>

        <Section title="The problem">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="xbox_blades.mp4"/>
          <Copy class="col-sm-9">
            The current interface had 5 content categories that were arranged in a layout called "blades". It was a space limited approach due to the boxed in nature of the design. The XBOX team was running into issues supporting a growing library of titles, especially in XBOX Live and marketplace.
            <br/><br/>
            The challenge was to build an interface that would be able to handle an unknown quantity of items as the product keeps growing into the future.
          </Copy>
        </Section>

        <Section title="Removing the constraints">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="xbox_01_prototype.mp4"/>
          <Copy class="col-sm-9">
            The first approach to the space constraints problem was to remove the boundaries completely. What if content categories were organized in 3D space and their contents were rows, like a film strip? Up/Down would navigate through Z space and left/right selects items in the row. This would allow an infinitely extendible framework to add content.
          </Copy>
        </Section>

        <Section title="Building an orginization model">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="xbox_02_prototype.mp4"/>
          <Copy class="col-sm-9">
            The next apprach attempts to organize the content to help the user find what they are looking for. Instead of using Z space I used a fractal like zoom in effect, where each item would give a sense of the content inside of it and you could drill in. There would be no limitd to the depth of zoom, which would allow the team to completely re-arrange the content categories in the future if they needed. It could also support thumbnail images in addition to text.
          </Copy>
        </Section>

        <Section title="Quick switch content">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="xbox_04_prototype.mp4"/>
          <Copy class="col-sm-9">
            I also explored versions that were a bit closer to the current design, looking at ways to jump in and out of game play and what the menu button context means. What if the menu was simply an overlay the content lived in and you could pop in and out quickly?
          </Copy>
        </Section>

        <Section title="Final vesion">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="hero.mp4"/>
          <Copy class="col-sm-9">
            The final version combined the previous explorations together and added a few more details. What if the menu button was also context aware and could be used as a filtering mechanism while browsing large quantities of content? And how do we make it a bit more visually appealing while also reducing clutter, but maintain the organization from the zoom concept?
          </Copy>
        </Section>


      </div>
    )
  }
})
