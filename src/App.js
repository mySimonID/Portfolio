import React from 'react';

import SkillsCard from './components/SkillsCard'
// import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import CurrentProjectsPage from './components/CurrentProjectsPage'

import { skills, experience, education } from './data/Content'

import './App.css';
import './Article.css'
import './Skills.css'



function App() {
  return (
    <div className="App">

      {/* ABOUT ME */}
      <div className="aboutme shadow">
        <h1>About Me</h1>
        <p>I am a Technical Project Manager who has delivered a number of development and business projects.</p>
        <p>My focus is now on software development where I am building my experience with a range of technologies.</p>
      </div>


      {/* CURRENT PROJECTS */}

      <section>
        <div className="aboutme shadow">
          <h1>Featured Project</h1>
          <CurrentProjectsPage filename={`${process.env.PUBLIC_URL}/content/UIKit001.txt`} />

        </div>
      </section>

      <section>
        <div className="aboutme shadow">
          <h1>Main Project</h1>
          <CurrentProjectsPage filename={`${process.env.PUBLIC_URL}/content/issueJ001.txt`} />

        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section>
        <div className="feature-row shadow">

          <div className="feature-container">
            <div className="feature-title">

              <h1>Example Work</h1>
            </div>

            <div className="row">
              {skills.map(skill => {
                return (
                  <SkillsCard key={skill.id} skill={skill} />
                )
              })
              }
            </div>

          </div>
        </div>
      </section>


      {/* EXPERIENCE */}
      {/* <div className="aboutme shadow">
        <h1>Work Experience</h1>
        {
          experience.map(exp => <ExperienceCard key={exp.id} exp={exp} />)
        }
      </div> */}

      {/* EDUCATION */}
      <div className="aboutme shadow">

        <h1>Skills & Education</h1>
        <div className="skills-section">
          <p><b>Skills:</b> Project Management, Business Analysis, Software Development, Testing/UAT, Innovation</p>
          <p><b>Software:</b> Microsoft Office, Microsoft Project, JIRA/Confluence, Visual Studio/Code</p>
          <p><b>Development:</b> Excel VBA, MS Project VBA, SQL, HTML, CSS, Javascript, React.js, Node.js, Xamarin, C#, RPA</p>
        </div>
        <br />
        <div className="skills-section">
          <ul>
            {
              education.map((exp,index) => { return (<li key={index}><EducationCard key={exp.id} exp={exp} /></li>) })
            }
          </ul>
        </div>
      </div>


      <footer>
        <div className="footerLink">
          <p>Contact: <a href="mailto:mySimonID@gmail.com">mySimonID@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
