import React, { Component } from "react";
import Avatar from "./avatar.png";
import "./page.css";


class ResumePage extends Component {
  render() {
    return (
      <div className="ResumePage">
        <div className="container main-container z-depth-3">
          <div className="row social-links-container">
            <div className="col s12 center-align">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zerongtonywang/">
                <span>LinkedIn</span>
              </a>

              <div className="vertical-separator">|</div>

              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s4291158">
                <span>GitHub</span>
              </a>

              <div className="vertical-separator">|</div>

              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ZerongTonyWang">
                <span>Twitter</span>
              </a>
            </div>
          </div>

          <div className="row row-section intro-container">
            <div className="col m3 s12">
              <div className="dp-container">
                <img className="circle" src={Avatar} alt="Zerong Tony Wang" />
              </div>
            </div>
            <div className="col m9 s12">
              <div className="headline">
                <h3 className="name">Zerong Tony Wang</h3>
                <h5 className="grey-text lighten-2 flow-text">Software Contractor & Full-Stack Developer</h5>
                <a href="mailto:zerongtonywang@gmail.com?Subject=Intro">
                  <span className="flow-text">zerongtonywang@gmail.com</span>
                </a>
                <p>(+61) 439 406 499</p>
              </div>
            </div>
          </div>

          <div className="row row-section">
            <div className="col m3 s12">
              <h5>Summary</h5>
            </div>
            <div className="col m9 s12">
              <p>Managing an effective & widely-capable freelance dev team with each 5~10 years exp. We're communication focused and open to projects in design, web, mobile, machine learning, and blockchain. Let me know how we could help.</p>

              <ul className="browser-default">
                <li>6+ years programming</li>
                <li>3+ years in Brisbane startups</li>
                <li>15+ client & personal projects per year</li>
                <li>20+ books a year</li>
              </ul>
            </div>
          </div>

          <div className="row row-section">
            <div className="col m3 s12">
              <h5>Skills</h5>
            </div>

            <div className="col m3 s12">
              <h6 className="section-title">Code</h6>
              <ul>
                <li>Python, Flask, Django</li>
                <li>Javascript, Typescript, React, Node, Express</li>
              </ul>
            </div>


            <div className="col m3 s12">
              <h6 className="section-title">Tech</h6>
              <ul>
                <li>Serverless</li>
                <li>AWS proficient</li>
                <li>Relational databases</li>
              </ul>
            </div>

            <div className="col m3 s12">
              <h6 className="section-title">Work</h6>
              <ul>
                <li>Rapid prototyping</li>
                <li>Dev team lead</li>
                <li>Product management</li>
              </ul>
            </div>
          </div>

          <div className="row row-section">
            <div className="col m3 s12">
              <h5>Experience</h5>
            </div>

            <div className="col m9 s12">
              <div className="section-item">
                <h6 className="section-title">Software Contractor</h6>
                <span>Feb 2017 - Current</span>
                <ul className="browser-default">
                  <li>10+ projects a year</li>
                  <li>Less than 4 weeks usual turnaround for first product iteration</li>
                  <li>Communication focused product design and roadmap building</li>
                  <li>Maintainable & expressive code, adhere to most industry best practices</li>
                </ul>
                <p>Contract experiences elaborated below ▼</p>
              </div>

              <div className="section-item">
                <h6 className="section-title">Software Contractor - Queensland Urban Utilities</h6>
                <span>Jul 2018 - Current</span>
                <ul className="browser-default">
                  <li>Project manager & dev team lead</li>
                  <li>First product iteration within 3 weeks</li>
                  <li>UI/UX deign using Sketch & Material Design</li>
                  <li>Frontend using usual Typescript React stack and Material-UI</li>
                  <li>Backend using Typescript, Serverless, Node, etc.</li>
                </ul>
              </div>
              
              <div className="section-item">
                <h6 className="section-title">Frontend Developer - Culture Kings</h6>
                <span>Jun 2018 - Current</span>
                <ul className="browser-default">
                  <li>Implement template designs in Shopify Liquid</li>
                  <li>On going effort to move eCommerce platform to SPA with React</li>
                  <li>Typescript React integrating with Algolia for product search feature</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Software Contractor - Small Giants Advisory</h6>
                <span>Feb 2018 - Current</span>
                <ul className="browser-default">
                  <li>General IT management, e.g. accounts, emails, etc.</li>
                  <li>Technical Consulting</li>
                  <li>Full project development</li>
                  <li>First iteration within 4 weeks</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Frontend Developer (Contract) - Labrys</h6>
                <span>Jun 2018 - Jul 2018</span>
                <ul className="browser-default">
                  <li>First product iteration as per design within 4 weeks</li>
                  <li>Frontend using usual React stack</li>
                  <li>Integration with blockchain infrastructure</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Software Contractor - Neds</h6>
                <span>Feb 2018 - May 2018</span>
                <ul className="browser-default">
                  <li>Implemented Facebook Messenger bot for betting inquiries and FAQ</li>
                  <li>Backend using DialogFlow, Python, AWS Lambda</li>
                  <li>Bot is currently live and serving Neds customers</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Frontend Developer (Contract) - Hydric Media</h6>
                <span>Mar 2018</span>
                <ul className="browser-default">
                  <li>Implemented design changes, custom animations and CMS integration in React</li>
                  <li>Collaborated with Spotify and Emirates</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Frontend Developer (Contract) - Pitchblak</h6>
                <span>May 2017 - Nov 2017</span>
                <ul className="browser-default">
                  <li>Developed webapps as per design in usual React stack & D3</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Lead Backend Engineer - iRecruit Australia</h6>
                <span>May 2016 - Feb 2017</span>
                <ul className="browser-default">
                  <li>Lead backend developer for all 3 MVP products with the largest serving more than 40 endpoints</li>
                  <li>Backend team lead of up to a 4-member team</li>
                  <li>Backend using usual Django stack</li>
                  <li>Frontend using usual React stack</li>
                  <li>SCRUM, agile, and test driven development</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Tech Intern - ilab UQ</h6>
                <span>Dec 2015 - Mar 2016</span>
                <ul className="browser-default">
                  <li>Full stack developer for two MVPs in Java and Python</li>
                  <li>Content marketing & SEO</li>
                  <li>Advised startup companies on business model and finding product market fit</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row row-section">
            <div className="col m3 s12">
              <h5>Projects</h5>
            </div>
            <div className="col m9 s12">
              <div className="section-item">
                <h6 className="section-title">Private Projects</h6>
                <p>More than a dozen projects built on mostly react, django or serverless, more details available upon request.</p>
              </div>

              <div className="section-item">
                <h6 className="section-title">The Modern Virus - A study of social psychology in product virality</h6>
                <span className="grey-text">Current</span>
                <p>
                  Guided by the books:
                  <a target="_blank" rel="noopener noreferrer" href="https://g.co/kgs/YHABNM"> <i>Hooked</i></a>,
                  <a target="_blank" rel="noopener noreferrer" href="https://g.co/kgs/x4ZqFX"> <i>Contagious</i></a>,
                  and <a target="_blank" rel="noopener noreferrer" href="https://g.co/kgs/u76dxb"><i>Influence</i></a>,
                  this project aims to apply social psychology knowledge and practices to orchestrate product virality.
                </p>

                <p>More details coming soon...</p>
              </div>

              <div className="section-item">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/s4291158/QAaggregator">
                  <h6 className="section-title">Study of answer popularity on Quora</h6>
                </a>
                <p>The reception of a given answer on Quora mostly does not match its input effort due to other popularity factors. The project aimed optimise effort-to-views on my answers by discovering promising questions using range of popularity indicators.</p>
                <ul className="browser-default">
                  <li>Handled periodically scraping, processing and storing of large amount of answer data</li>
                  <li>Reverse engineered Quora's client side authentication mechanism</li>
                  <li>Designed experiments to validate correlations between data sets</li>
                </ul>
              </div>

              <div className="section-item">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/s4291158/dota2-lounge-analysis">
                  <h6 className="section-title">Study of betting on DOTA2 lounge</h6>
                </a>
                <p>Esports betting can be uneducated, people who make bets consider very little of the factors that impact team performance. The project aimed to prove the hypothesis - <i>In any given match, a team is considered under/over valued based on their betting odds (expectation) compared to their performance rating(actual), therefore there could exist a model capable of exploiting the differences.</i></p>
                <ul className="browser-default">
                  <li>Handled scraping, processing and storing of data on 14000+ matches played</li>
                  <li>Determined rating model to accurately assess teams and their performances</li>
                  <li>Determined betting model to exploit over/under valued teams, capable of breaking even</li>
                </ul>
              </div>

              <div className="section-item">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/s4291158/trump">
                  <h6 className="section-title">Is trump going to be president?</h6>
                </a>
                <p>For shits and giggles, the site allowed users to see a random sarcastic comment about Donald Trump becoming president, they can also add their own comment to the random pool. The project aimed to assess my ability to build and deploy a simple interactive website, as well as assessing my ability to distribute interesting content.</p>
                <ul className="browser-default">
                  <li>Distribution resulted in 105K views & 27K users in first 24 hours</li>
                  <li>Custom built & deployed website using Django, nginx, and gunicorn</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">parking4uni</h6>
                <p>Platform aimed to increase parking availability around UQ by enabling nearby residents to rent out their available spaces.</p>
                <ul className="browser-default">
                  <li>Built MVP with another software engineer</li>
                  <li>Arranged & achieved media exposure: news article & radio segment</li>
                  <li>Worked on addressing legality concerns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col m3 s12">
              <h5 className="truncate">References</h5>
            </div>

            <div className="col m9 s12">
              <p>Available upon request</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ResumePage;
