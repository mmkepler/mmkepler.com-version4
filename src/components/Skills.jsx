import React from 'react'
import "../styles/skills.css"

const artisticSkills = ["Graphic Design", "Photo Editing", "Photoshop", "Illustrator", "Sketch", "3D Animation/Modeling"]
const codingSkills = ["JavaScript/ES6+", "React/Hooks", "Redux", "CSS/Flexbox", "Styled Components", "Bootstrap", "Sass", "Node.js", "Express.js", "MongoDB", "Accessibility", "npm", "Git/GitHub", "Firebase DB & Auth", "Webpack/Babel", "Gulp/Grunt", "Rest APIs", "JQuery"]
const deploymentSkills = ["Cpanel", "Heroku", "AWS/S3", "Digital Ocean", "Netlify"]
const knowledgeableSkills = ["Next.js", "Workbox/PWA", "Google Analytics", "Apollo/GraphQL", "Keystone.js", "Python/PHP", "WordPress", "SEO", "Cloudflare", "Adobe XD"]


export default function Skills() {
  return (
    <section id="skills">
      <div className="holder">
        <span className="spanleft"></span><h2 className="title" tabIndex="0">Skills</h2><span className="spanright"></span>
      </div>
      <div className="section" >
      <div className="skillsContainer">
        <div className="skillsWrapper">
        
        <div className="columns">
        
          <div className="one">
            <div>
            <h3 className="skilltTitles">Coding Skills</h3>
            <ul>
              {codingSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className="listItems">{el}</li>
                )
              })}
            </ul>
          </div>

        
              
          <div>
            <h3 className="skilltTitles">Deployment Platforms</h3>
            <ul>
              {deploymentSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className="listItems">{el}</li>
                )
              })}
            </ul>
          </div>

          </div>

          <div className="two">

          <div>
            <h3 className="skilltTitles">Knowledgeable In:</h3>
            <ul>
              {knowledgeableSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className="listItems">{el}</li>
                )
              })}
            </ul>
          </div>

          <div>
            <h3 className="skilltTitles">Artistic Skills:</h3>
            <ul>
              {artisticSkills.map(function(el, index){
                return(
                  <li tabIndex="0" key={index} className="listItems">{el}</li>
                )
              })}
            </ul>
          </div>
          </div>
        </div>
        </div>
      </div>
     </div>
    </section>
  )
}
