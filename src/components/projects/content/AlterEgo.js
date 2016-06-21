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
            <Copy class="col-sm-9">
              <h4>About</h4>
              In 2012 I opened a comic book store in the Crossroads Mall, Bellevue. The staple of comic book stores is the subscription model: customers can request reserved copies of specific titles. If they can't make it in on release day they have a guarunteed copy in a special hold box, even if the store sells out.
              <br/><br/>
              We quickly discovered the difficulty in keeping customer subscriptions in sync with order quantites. After paper forms and Excel proved ineffective, I built out my own database backed subscription application to support our customers. They can log in, check their lists, see what's actually in their boxes, and get email notifications when new issues arrive. All while helping me keep track of our stores orders and demand.
              <br/><br/>
              It's currently live, you can check it out at <a href="http://sublist.alteregocollectibles.com">http://sublist.alteregocollectibles.com</a>
          </Copy>

          <Copy class="col-sm-3">
            <h4>Role</h4>
            <ul>
              <li>Design</li>
              <li>Backend</li>
              <li>Frontend</li>
              <li>Mobile App</li>
            </ul>
          </Copy>

        </Section>

        <Section title="Discover new favorites">
          <ImageFull src={`${this.props.imagePath}/home.jpg`} />
          <Copy class="col-sm-9">
            In addition to keeping track of how much I need to order each week, we also want to help people find new comics they might enjoy. In store we can have conversations with customers, feeling out what someone's preferences and making insightful recommendations.
            <br/><br/>
            Online that is much harder. To solve for this the landing page displays upcoming comics in order of popularity for our store. You can filter by release date, publisher, writer, and search by any attribute, even crossovers and story arcs. The primary focus is to find something you might like without knowing the name of it in a visually appealing way, just like the browsing experience at the store.
          </Copy>
        </Section>

        <Section title="Search and filter">
          <ImageFull src={`${this.props.imagePath}/search.jpg`} />
          <Copy>
            Early customer feedback was great, but people find things in different ways. Personas helped me identify customer needs and support requirements. The dedicated reader wants to search for a comic by title, or see a list of comics written by a specific creator, or all titles that follow a story arc. The casual reader on the other hand likes to browse and prefers to just see everything that's coming in next week or the week after.
            <br/><br/>
            By increasing the visibility of the filters, adding a search that looks for a lot more than just the title, and listing the filters in order of their popularity we are able to hit all personas needs.
          </Copy>
        </Section>

        <Section title="Other customers also like...">
          <ImageFull src={`${this.props.imagePath}/recommendations.jpg`} />
          <Copy class="col-sm-9">
            Once a customer subscribes to a few titles we can start making suggestions based on previous customer behavior. Most people follow their favorite writers (more so than artists), and typically stick within a publisher like Marvel or DC. A simple algorithm returns a list of comics that other customers have also subscribed to with weighting for writer and publisher.
            <br/><br/>
            There has been a noticable increase in the rate of subscriptions after implenting this feature.
          </Copy>
        </Section>

        <Section title="Admin Dashboard">
          <ImageFull src={`${this.props.imagePath}/user.jpg`} />
          <Copy class="col-sm-9">
            The customer facing front end was getting a lot of great feedback. Our customers could manage their subscriptions from home and were adding more subscriptions than cancelling. But now we needed a way to manage our customers more efficiently. I experimented with many javascript solutions for a dashboard from jQuery to Angular and React in order to create a single page experience for my employees to help customers faster.
          </Copy>
        </Section>

        <Section title="Mobile App">
          <ImageFull src={`${this.props.imagePath}/ios.jpg`} />
          <Copy class="col-sm-9">
            The number one requested feature was for mobile support. I built out native mobile apps for both iOS and Android. You can add or remove subscriptions, browse featured titles, and check what is currently in your box. They will be launching soon on Google Play and the iOS App Store.
          </Copy>
        </Section>

        <Section title="Results">
          <ImageFull src={`${this.props.imagePath}/chart.jpg`} />
          <Copy class="col-sm-9">
            At launch there were 207 users with an average of 4.97 comics each. Now we have 281 users and the average has increased to 9.64. Our customer base has seen a growth of 35% in the last 3 years, and our total subscriptions has gone up by 273%. That means we haven't just more customers, but each one is finding more to purchase.
            <br/><br/>
            It's been so helpful in increasing sales, reducing over ordering, and identifying trends that I plan to release it to other comic book stores. Additionally we can expand our customer base to those who don't have a local comic store and could get automatic monthly or bi-weekly shipping directly to their door.
          </Copy>
        </Section>


      </div>
    )
  }
})
