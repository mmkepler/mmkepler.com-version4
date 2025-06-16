import React from 'react'
import skillstyles from "../styles/skills.module.css"

const artisticSkills = ["Graphic Design", "Photo Editing", "Photoshop", "Illustrator", "Sketch", "3D Animation/Modeling"]
const codingSkills = ["JavaScript/ES6+", "React/Hooks", "Redux", "CSS/Flexbox", "Styled Components", "Bootstrap", "Sass", "Node.js", "Express.js", "MongoDB", "Accessibility", "npm", "Git/GitHub", "Firebase DB & Auth", "Webpack/Babel", "Gulp/Grunt", "Rest APIs", "JQuery"]
const deploymentSkills = ["Cpanel", "Heroku", "AWS/S3", "Digital Ocean", "Netlify"]
const knowledgeableSkills = ["Next.js", "Workbox/PWA", "Google Analytics", "Apollo/GraphQL", "Keystone.js", "Python/PHP", "WordPress", "SEO", "Cloudflare", "Adobe XD"]


export default function Skills() {
  return (
    <article id={skillstyles.skills}>
      <div className={skillstyles.holder}>
        <span className={skillstyles.spanleft}></span><h2 className={skillstyles.title} tabIndex="0">Skills</h2><span className={skillstyles.spanright}></span>
      </div>
      <div className={skillstyles.section}>
      <div className={skillstyles.skillsContainer}>
        <div className={skillstyles.skillsWrapper}>
        
        <div className={skillstyles.columns}>
        
          <div className={skillstyles.one}>
            <section>
            <h3 className={skillstyles.skilltTitles}>Coding Skills</h3>
            <ul>
              {codingSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={skillstyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </section>

        
              
          <section>
            <h3 className={skillstyles.skilltTitles}>Deployment Platforms</h3>
            <ul>
              {deploymentSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={skillstyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </section>

          </div>

          <div className={skillstyles.two}>

          <section>
            <h3 className={skillstyles.skilltTitles}>Knowledgeable In:</h3>
            <ul>
              {knowledgeableSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={skillstyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </section>

          <section>
            <h3 className={skillstyles.skilltTitles}>Artistic Skills:</h3>
            <ul>
              {artisticSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className={skillstyles.listItems}>{el}</li>
                )
              })}
            </ul>
          </section>
          </div>
        </div>
        </div>
      </div>
     </div>
    </article>
  )
}
