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
                <span>
                  LinkedIn
                </span>
              </a>

              <div className="vertical-separator">|</div>

              <a target="_blank" rel="noopener noreferrer" href="https://github.com/s4291158">
                <span>
                  GitHub
                </span>
              </a>

              <div className="vertical-separator">|</div>

              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ZerongTonyWang">
                <span>
                  Twitter
                </span>
              </a>
            </div>
          </div>

          <div className="row row-section intro-container">
            <div className="col m3 s12">
              <div className="dp-container">
                <img className="circle" src={Avatar} alt="Zerong Tony Wang"/>
              </div>
            </div>
            <div className="col m9 s12">
              <div className="headline">
                <h3 className="name">Zerong Tony Wang</h3>
                <h5 className="grey-text lighten-2 flow-text">Full Stack Software Developer</h5>

                <a href="mailto:zerongtonywang@gmail.com?Subject=Intro">
                  <span className="flow-text">
                    zerongtonywang@gmail.com
                  </span>
                </a>

                <p>(+61) 0439 406 499</p>
              </div>
            </div>
          </div>

          <div className="row row-section">
            <div className="col m3 s12">
              <h5>Summary</h5>
            </div>
            <div className="col m9 s12">
              <p>
                Startup oriented software developer with a focus on product development, growth and management.
              </p>

              <ul className="browser-default">
                <li>3+ years in the Brisbane startup scene</li>
                <li>15+ client & private projects per year</li>
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
                <li>Javascript, Node, React</li>
              </ul>
            </div>


            <div className="col m3 s12">
              <h6 className="section-title">Tech</h6>
              <ul>
                <li>Serverless</li>
                <li>Various AWS services</li>
                <li>Relational databases</li>
              </ul>
            </div>

            <div className="col m3 s12">
              <h6 className="section-title">Startup</h6>
              <ul>
                <li>Rapid product development</li>
                <li>Agile, TDD, SCRUM</li>
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
                <span>2017.2 - Current</span>
                <ul className="browser-default">
                  <li>
                    Consulting
                  </li>
                  <li>
                    Full project development
                  </li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Software Contractor - Neds</h6>
                <span>2017.2 - 2017.5</span>
                <ul className="browser-default">
                  <li>
                    Three months contract to develop a messenger bot to handle custom functions and FAQ
                  </li>

                  <li>
                    Developed bot using DialogFlow, Python, AWS Lambda
                  </li>

                  <li>
                    The bot is currently live and serving Neds customers
                  </li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Software Engineer - iRecruit Australia</h6>
                <span>2016.5 - 2017.2</span>
                <ul className="browser-default">
                  <li>
                    Lead backend developer for Python & Django codebase serving 50+ endpoints
                  </li>

                  <li>
                    Frontend development in ReactJS
                  </li>

                  <li>
                    SCRUM, agile, and test driven development
                  </li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">Tech Intern - ilab UQ</h6>
                <span>2015.12 - 2016.3</span>
                <ul className="browser-default">
                  <li>
                    Full stack developer for two MVPs (one Java, one Python)
                  </li>
                  <li>
                    Content marketing & SEO
                  </li>
                  <li>
                    Advised startup companies on business model and finding product market fit
                  </li>
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
                <p>
                  More than a dozen projects built on mostly react, django or serverless, more details available upon
                  request.
                </p>
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
                <p>
                  The reception of a given answer on Quora mostly does not match its input effort due to other
                  popularity
                  factors. The project aimed optimise effort-to-views on my answers by discovering promising questions
                  using
                  range of popularity indicators.
                </p>
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
                <p>
                  Esports betting can be uneducated, people who make bets consider very little of the factors that
                  impact
                  team
                  performance. The project aimed to prove the hypothesis - <i>In any given match, a team is considered
                  under/over valued based on their betting odds (expectation) compared to their performance
                  rating(actual),
                  therefore there could exist a model capable of exploiting the differences.</i>
                </p>
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
                <p>
                  For shits and giggles, the site allowed users to see a random sarcastic comment about Donald Trump
                  becoming
                  president, they can also add their own comment to the random pool. The project aimed to assess my
                  ability to
                  build and deploy a simple interactive website, as well as assessing my ability to distribute
                  interesting
                  content.
                </p>
                <ul className="browser-default">
                  <li>Distribution resulted in 105K views & 27K users in first 24 hours</li>
                  <li>Custom built & deployed website using Django, nginx, and gunicorn</li>
                </ul>
              </div>

              <div className="section-item">
                <h6 className="section-title">parking4uni</h6>
                <p>
                  Platform aimed to increase parking availability around UQ by enabling nearby residents to rent out
                  their
                  available spaces.
                </p>
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

              <div hidden>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/david-uhlmann-23aa5177/">
                  <h6 className="section-title">David Uhlmann</h6>
                </a>
                <span className="grey-text">Then CTO of iRecruit</span>

                <p>
                  I have worked with Tony as his manager from May 2016 to Feb 2017 at iRecruit Australia. During that
                  time
                  Tony
                  continually displayed the kind of motivation and drive that every manager hopes to see in a new
                  graduate,
                  except that for the time he was at iRecruit Tony was still studying his final year of Computer
                  Science.
                  Tony
                  has a drive to continually learn and improve, not just in new programming and ops skills but also
                  management
                  and communication skills: having worked his way through the books: Hard Thing About Hard Things,
                  Creativity
                  Inc, Master of Doom, and The Personal MBA, far quicker than I had managed to. I greatly admired this
                  about
                  Tony, as I had placed him into the Backend Team Lead role even though he lacked experience: but Tony
                  recognised early on that he was not doing well as a manager, then took responsibility for his team and
                  proactively started seeking ways to self-improve and improve the team environment.
                </p>
                <p>
                  As a team member: Tony is friendly, humorous, and full of memeful banter. As a team lead: Tony leans
                  towards a
                  conservative and knowledge-based approach, requiring solid evidence of improvements before accepting
                  new
                  processes or concepts into the protected branches of his team's repo.
                </p>
                <p>
                  Tony's skills lie mainly in backend application code where he used his specialised knowledge of
                  Python/Django/DjangoRestFramework to help build the iRecruit API and database. There as Backend Team
                  Lead,
                  Tony oversaw the implementation of the API validation and logic, Postgres DB structure, migrations,
                  seeding,
                  and ORM optimisations to reduce DB calls, and all git merge requests involving those. I greatly
                  appreciated
                  Tony's help in these areas and was able to rely on his domain knowledge enough that I was able to
                  instead
                  focus my efforts on other areas of our product implementation and dev ops processes. Tony also did a
                  bit
                  of
                  frontend React-Redux coding for a few weeks at iRecruit.
                </p>
                <p>
                  In summary, Tony is a capable developer and a developer who is capable of growing into a role, who is
                  well
                  suited to python backend applications and React projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default ResumePage;