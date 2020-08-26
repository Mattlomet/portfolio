import React from "react";
import Profile from "./assets/profile.jpg";
import "./App.css";

function App() {
  return (
    <>
    <div className="uk-align-center uk-container-large">

      <div class="uk-card uk-card-default uk-card-body uk-animation-slide-top">
        <div
          class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
          data-uk-grid
        >
          <div class="uk-flex-last@s uk-card-media-right uk-cover-container  uk-padding">
            <img className="profile__rounded uk-align-center " src={Profile} />
          </div>
          <div>
            <div class="uk-card-body">
              <h2 className="uk-text-primary uk-card-title">Matthew Lomet</h2>

              <p>
                Currently working at Cognizant as a Full Stack Software
                Engineer.
              </p>
              <p>
                Starting at New York Code and Design Academy I was trained in
                many languages - mainly using ReactJs and NodeJs to build full
                stack web applications. Then I attended Rutgers Full Stack Web
                Development Boot camp and took a further dive into ReactJS,
                nodeJS, paired programming and mySQL and NoSQL persistence.
                Afterwards I was invited to Cognizant's Talent Accelerator
                program run by Rutgers and Trilogy education. This course was an
                intense 3 month Boot camp where I was taught Java 8, Spring
                Boot, Micro-service architecture, unit testing, integration
                testing - learning to make strong, scalable APIs. At the end of
                the course there was an interview for an Associate Full Stack
                Developer role at Cognizant and in February 2020 I started my
                career as a Programmer. Cognizant following me being hired has
                also enabled me and helped me get certified as an Amazon
                Associate Developer (certificate on profile).
              </p>
              <br/>
              <h4>Contact me!</h4>
              <p><bold>matthewlomet@gmail.com</bold></p>
            </div>
          </div>
        </div>
        <hr class="uk-divider-icon"></hr>
      </div>

      <div class=" uk-animation-slide-bottom">
        <div
          class="uk-card uk-card-default education__text-center"
        >
          <div>
            <div class="uk-card-body">
              <h2 className="uk-text-primary uk-card-title education__text-left">Education</h2>

              <ul data-uk-accordion>
    <li class="uk-open">
        <a class="uk-accordion-title" href="#">Cognizant Talent Accelerator</a>
        <div class="uk-accordion-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">Rutgers Full Stack Web Development Bootcamp</a>
        <div class="uk-accordion-content">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
        </div>
    </li>
    <li>
        <a class="uk-accordion-title" href="#">New York Code and Design Academy</a>
        <div class="uk-accordion-content">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
        </div>
    </li>
</ul>

            </div>
          </div>
        </div>
        <hr class="uk-divider-icon"></hr>
      </div>
      </div>

      {/* 
        <PersonalDetails/>
        <Education/>
        <WorkExperience/>
        <Skills/>
      */}
    </>
  );
}

export default App;
