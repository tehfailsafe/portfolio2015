import React from 'react';

import Section from '../show/Section'
import CopySplitLeft from '../show/CopySplitLeft'
import CopySplitRight from '../show/CopySplitRight'
import Copy from '../show/Copy'
import ImageFull from '../show/ImageFull'
import VideoPlayer from '../show/VideoPlayer'

export default React.createClass({
  render(){
    return (
      <div>
        <Section>
          <Copy class="row">
            <CopySplitLeft title="ABOUT">
              In 2012 I opened a comic book store in the Crossroads Mall, Bellevue. I didn't anticipate the challenge of keeping customers requests and subscriptions in sync with my order counts... After a few misteps with paper forms and excel, I eventually decided to build out my own database backed subscription mamangement application to support our customers needs.
              <br/>
              <br/>
              It's currently live, check it out at <a href="http://sublist.alteregocollectibles.com">http://sublist.alteregocollectibles.com</a>
            </CopySplitLeft>

            <CopySplitRight title="ROLE">
              <ul>
                <li>Design</li>
                <li>Backend</li>
                <li>Frontend</li>
                <li>Mobile App</li>
              </ul>
            </CopySplitRight>
          </Copy>
        </Section>

        <Section title="LANDING PAGE">
          <ImageFull src={`${this.props.imagePath}/home.jpg`} />
          <Copy>
              The overall goal of the project was to help people find the comics they might be interested in, but don't know they exist yet. In store we do that through conversations, feeling out what people's preferences are and making recommendations.
              <br/>
              <br/>
              Online that is much harder so I setup the landing page to display upcoming comics in order of popularity for our store. You can filter by release date, publisher, writer, and search by any attribute, even crossovers and story arcs. The primary focus is to find something you might like without knowing the name of it in a visually appealing way, just like the browsing experience at the store.
          </Copy>
        </Section>

        <Section title="COMIC DETAIL">
          <ImageFull src={`${this.props.imagePath}/detail.jpg`} />
          <Copy>
              Each issue has a detail view where you can update your current subscription status. My goal was to make it super simple to sign up to new comics as they come out, but not hinder customers who might want to cancel. We also saw a noticable bump in subscriptions after implenting a <quote>"Other subscribers also signed up for"</quote> section, letting customers see trends within their favorite titles.
          </Copy>
        </Section>

        <Section title="ADMIN DASHBOARD">
          <ImageFull src={`${this.props.imagePath}/user.jpg`} />
          <Copy>
            The front end was getting a lot of attention, our customers could manage their subscriptions from home and on handhelds. But now we needed a way to manage our customers. I experimented with many javascript solutions from jQuery noodle soup to Angular and React to create a SPA experience for my employees.
          </Copy>
        </Section>

        <Section title="MOBILE APPS">
          <ImageFull src={`${this.props.imagePath}/ios.jpg`} />
          <Copy>
            Still a work in progress, I am building out an Android and iOS app for the service.
          </Copy>
        </Section>


      </div>
    )
  }
})
