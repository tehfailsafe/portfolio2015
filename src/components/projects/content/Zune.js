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
          <Copy class="col-sm-9">
            <h4>About</h4>
            In 2008 the Microsoft Zune team was getting ready to launch the new zuneHD. With new hardware and form factor, the new device needed a new interface to support touch interactions.
            <br/><br/>
            I worked directly with the team to explore new ideas for interaction models, organization, and content. I focused more on the interaction than the visual design, treating these explorations like interactive wireframes.
          </Copy>

          <Copy class="col-sm-3">
            <b4>Role</b4>
            <ul>
              <li>Interaction Design</li>
              <li>Motion Design</li>
            </ul>
          </Copy>
        </Section>

        <Section title="The Challenges">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_gen1.mp4"/>
          <Copy class="col-sm-9">
            This biggest challenge to address was the transition from a dial pad control to a touch screen device. This meant rethinking the original layout and solving new problems like fitting content in a limited space, promoting browsability and discoverability with more visual cues, and supporting an unknown amount of content.
          </Copy>
        </Section>

        <Section title="Swipe offscreen">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_01.mp4"/>
          <Copy class="col-sm-9">
            I explored the idea of using swipe to pull things into view from offscreen, leaving a small bit of the next content visible to indicate there is more beyond the frame.
          </Copy>
        </Section>


        <Section title="Filter and sort">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_02.mp4"/>
          <Copy class="col-sm-9">
            I thought a bit about how to organize and sort content. What if tapping a filter would give you instant feedback on the items that matched, and double tapping would select that group and resort the content, removing the items that don't match. This process could be repeated with a subset of filters to further refine.
          </Copy>
        </Section>

        <Section title="Focused content">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_03.mp4"/>
          <Copy class="col-sm-9">
            What if I could get more content to fit into a small frame by overlapping in Z space?  Switching focus with blur and highlighting the content that is currently being interacted with. Tapping other content would bring it back into focus again.
          </Copy>
        </Section>
        <Section title="Infinite zoom">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_00.mp4"/>
          <Copy class="col-sm-9">

            What if each category showed a scaled down preview of it's content and you could zoom in on tap? And then you could keep diving futher in getting previews of each next step. This would allow unlimited content.
          </Copy>
        </Section>

        <Section title="Category clustering">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_05.mp4"/>
          <Copy class="col-sm-9">
            What if the main categories were clusters of content that could be brought into focus? Starting from a zoomed out view you could see them all, and tapping one would zoom in to it.  Inside a category you could swipe the content from off screen or pivot along the top list to filter the content like the previous examples. Hitting the home button would zoom back out and give you a quick way to switch back to other sections.
          </Copy>
        </Section>

        <Section title="Galaxy clusters">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_07.mp4"/>
          <Copy class="col-sm-9">
            What if the category clusters lived in a little galaxy, and the device screen was actually a viewport into that world? Tilting the device would let us peek around corners, revealing a larger space than we can physcially see. Its bigger on the inside...
            <br/><br/>
            We took this concept a bit further and made an interactive prototype that allowed for quick feedback and iteration.
          </Copy>
        </Section>

        <Section title="Results">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="zune_demo.mp4"/>
          <Copy class="col-sm-9">
            The team continued to iterate and really polished up some of the thinking. You can start to see the building blocks that later became the Metro design language, heavily influencing Windows and Windows Mobile.
          </Copy>
        </Section>
      </div>
    )
  }
})
