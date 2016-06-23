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

              When 343 took over the Halo franchise from Bungie they wanted a new interface for their first installment title. Some of the challenges were to make the main menu more immersive and engaging. How can it feel like it's part of the storyline? With weekly mission updates and new scenarios, how can it flow with cutscenes and really bring that new content to players?
              <br/><br/>
              I worked with another talented designer on weekly iteration sprints with the 343 engineering and story team. We developed many concepts and a full end to end prototype that was fully user tested.
            </Copy>

            <Copy class="col-sm-3">
              <h4>Role</h4>

              <ul>
                <li>Motion Design</li>
                <li>Interaction Design</li>
              </ul>
            </Copy>
        </Section>

        <Section title="Main Menu">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="MainMenu-002.mp4"/>
          <Copy class="col-sm-9">
            I started of by exploring the main menu, separating single player campaign gameplay from multiplayer linking them to the planet and the ship, which would play a major role in the gameplay. I wanted to explore the idea of using the ship as a navigational element. What would it feel like to walk around inside, each content section as a different room in the physical ship?
            <br/><br/>
            We couldn't do a full first person view for the entire menu, so I added a sublte head bob and used the transitions and cutscenes to feel like you are in the space.
          </Copy>
        </Section>


        <Section title="On the ship">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="halo_shipExploration_1.mp4"/>

          <Copy class="col-sm-9">
            It was a start, but I wanted the ship to be more immersive. Working with the engineering team to identify the limitations, I tried a few more explorations that would be feasible but also engaging.
          </Copy>

          <br/>

        </Section>
        <Section>

          <ImageFull src={`${this.props.imagePath}/halo_ship_explore1.jpg`} />
          <br/>
          <ImageFull src={`${this.props.imagePath}/halo_ship_explore3.jpg`} />
          <br/>
          <ImageFull src={`${this.props.imagePath}/halo_ship_explore2.jpg`} />
        </Section>

        <Section title="Player Menu">
          <ImageFull src={`${this.props.imagePath}/playerBar_01.jpg`} />
          <Copy class="col-sm-9">
            The player is a persistant element at the bottom allowing quick access to your party, loadouts, profile, and more. It should be with you at all times, projected directly onto the inside of your visor. I added a spherical effect along with a slight holographic look.
          </Copy>

          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="playerBar_01_open.mp4"/>

          <Copy class="col-sm-9">
            Hitting X would open the menu letting you access your character settings and gear, see your party memebers and settings, and your friend list.
          </Copy>
        </Section>

        <Section title="Multiplayer lobby">
          <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="lobby_01.mp4"/>
          <Copy class="col-sm-9">
            Another challenge was figuring out how to support multiplayer games that could have up to 16 players. Is there a way to fit them all on screen and still have the neccesary information like who's talking and their class? What about voting for a map and getting real time results from the other players?
          </Copy>
        </Section>

      </div>
    )
  }
})
