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
            Morgans Hotel Group is a luxury botique hotel brand. Online booking is pretty standardized and cookie-cutter. How can a global brand that relies on status differentiate itself? They turned to ZAAZ to help redefine their online presence.
            <br/><br/>
            My role on the team was primarily interaction design and motion. I helped define the date selection interaciton, split views play/stay concept, live updates, and rich full screen lifestyle imagery. I worked directly with the client for feedback and revisions, participated in user tests  in order to respond to the results, and worked with the engineering team to help bring the front end to final production.
          </Copy>

          <Copy class="col-sm-3">
            <h4>Role</h4>
            <ul>
              <li>Interaction Design</li>
              <li>Motion Design</li>
              <li>User Testing</li>
            </ul>
          </Copy>
        </Section>

        { this.props.open &&
          <div>
            <Section title="Starting point">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="MorgansBooking2008.mp4" />
              <Copy class="col-sm-9">
                The experience when we started was very basic, relying heavily on drop down menus. After selecting the dates and clicking "check availability" the available rooms and rates are displayed on the next page. If there are no rooms available or the rate was too high the user could only hit back, at which point the form would be reset and they would have to reselect the dates all over. This experience did not align with the Morgans brand.
              </Copy>
            </Section>

            <Section title="A better way to select dates">
              <div className="image-holder">
                <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="sketchCalendar.mp4" />
              </div>

              <Copy class="col-sm-9">
                The date selection needed to change, it should feel more alive. I want to be able to change my days and get results without leaving the page.
                <br/><br/>
                In this idea after selecting the check in and checkout dates we can zoom into the week and focus on what the user is likely to change, the immediate surrounding days.
              </Copy>
            </Section>

            <Section title="Timeline">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="sketchTimeline.mp4"/>
              <Copy class="col-sm-9">
                According to the data most people only book for 2 nights and check out on Sunday. What if we just skip ahead to the focused view and spread the calendar into a timeline? This would give us more real estate to highlight what really matters, finding the right room.
                <br/><br/>
                Another key point here is the nod to the conceierge, your on site point of contact for local events, nightlife, and reservations. What if we could bring that into the booking process? It needs to be more playful so people engage further and hopefully convert to a longer stay.
              </Copy>
            </Section>

            <Section title="Motion study">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="morgans_pitch.mp4"/>
              <Copy class="col-sm-9">
                Next we focused on bringing in the Morgans brand using high end imagery, style, and content into a motion study that helped describe the vision to the client and get full buyoff on the concept.
              </Copy>
            </Section>

            <Section title="Putting it all together">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="morgans_proto.mp4"/>
              <Copy class="col-sm-9">
                We went futher to build out a fully functional prototype focusing on the date selection, room booking, and live updates.
              </Copy>
            </Section>

            <Section title="User testing">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="prototype_swap.mp4"/>
              <Copy class="col-sm-9">
                We conducted several user tests on this prototype. The initial feedback was that people enjoyed the interaction and playfullness of the timeline, but felt it would be too challenging when tasked with booking a specific date, especially when the days fell on the weekend crossing into Monday.
                <br/><br/>
                We quickly adapted and built a new prototype to get in front of users. We focused on switching views between the timeline and the calendar. Users felt this was much better, but wondered why the default view wasn't the calendar. They prefered that view and would chose to use it over the timeline.
              </Copy>
            </Section>

            <Section title="More user testing">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="prototype_final.mp4"/>
              <Copy class="col-sm-9">
                We adapted again and built another prototype version, this time defaulting to the calendar view. We still wanted it to feel different and playful, adding circular dates and masking techniques to give it a bit more life.
              </Copy>
            </Section>

            <Section title="Ship it!">
              <VideoPlayer scrollPosition={this.props.scrollPosition} path={projectPath} src="hero.mp4"/>
              <Copy class="col-sm-9">
                The many iterations and variations paid off. Designing a rich experience while being able to rapidly prototype and get user feedback led to a successful product that won several awards, raising the bar for online hotel booking.
                <br/><br/>
                We continued to listen to users and watch the analyics dutifully after launch, providing continuous iteration and refinements over the next few years.
              </Copy>
            </Section>
          </div>
        }

      </div>
    )
  }
})
