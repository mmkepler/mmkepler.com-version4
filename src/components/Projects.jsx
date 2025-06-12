import React from 'react'
import "../styles/projects.css"
import website from "../assets/website.png"
import gitHubCat from "../assets/GitHub-Mark-32px.png"

import projectData from "../data/data"


export default function Projects() {
  return (
    <main id="projects">
      <div className="holder">
        <span className="spanleft"></span>
          <h2 className="title" tabIndex="0">Projects</h2><span className="spanright">
        </span>
      </div>
      <section className="section" >
      <div className="cardSpacer" >

        {projectData.map(function(el, index){
          return (
            
          <div className="card" key={index}>
            <div className="imageWrapper" >
              <img src={el.image} alt={el.altText} className="projectIamge" />
            </div>
            <div className="textWrap">
            <h2 className="projectsTitle" tabIndex="0">{el.name}</h2>
            <p className="text" tabIndex="0">{el.text}</p>
            </div>
            <div className="cardMenu">
              
              <a href={el.webLink} className="buttonWrapper" aria-label="link to hosted project" target="_blank" rel="noopener noreferrer">
                <img className="web" src={website} alt="An image to represent a website" />
              </a>
              <a href={el.gitLink} className="buttonWrapper" aria-label="link to github repository" target="_blank" rel="noopener noreferrer">
                <img src={gitHubCat} alt="The GitHub Octocat logo"/>
              </a>
            </div>
            </div>
          )
          
        })}
        </div>
      </section>
    </main>
  )
}

/*
import React from 'react'
import { useState } from 'react';
import "../styles/projects.css"


import projectData from "../data/data"
import projectData2 from "../data/data2"
import projectData3 from "../data/data3"

export default function Projects(props) {
  return (
    <section id="projects" name="projects">
      <div className="holder">
      <span className="spanleft"></span>
        <h2 className="title" tabIndex="0">Projects</h2><span className="spanright">
        </span>
      </div>
      <div className=".section" >
      <div className="cardspacer" >

        {projectData.map(function(el, index){
          return (
            
          <div className="card" key={index}>
            <div className="imageWrapper" >
              <img src={el.image} alt={el.altText} className="projectIamge" />
            </div>
            <div className="textWrap">
            <h2 className="projectsTitle" tabIndex="0">{el.name}</h2>
            <p className="text" tabIndex="0">{el.text}</p>
            </div>
            <div className="cardMenu">
              
              <a href={el.webLink} className="buttonWrapper" aria-label="link to hosted project" target="_blank" rel="noopener noreferrer">
                <img className="web" src="../images/web1.png" alt="An image to represent a website" />
              </a>
              <a href={el.gitLink} className="buttonWrapper" aria-label="link to github repository" target="_blank" rel="noopener noreferrer">
                <img src="../images/GitHub-Mark-32px.png" alt="The GitHub Octocat logo"/>
              </a>
            </div>
            </div>
          )
          
        })}
        </div>

        {( (props.shown.two === false && props.shown.three === false) ? <button className="showMore" id="button1" onClick={(e) => props.onClick(e)}>Show More</button> : null)}

        <div className="cardSpacer" >
        {(props.shown.two === true ? (projectData2.map(function(el, index){
          return (
            
          <div className="card" key={index} id="section2">
            <div className="imageWrapper" >
              <img src={el.image} alt={el.altText} className="projectImage"/>
            </div>
            <div className="textWrap">
            <h2 className="projectsTitle" tabIndex="0">{el.name}</h2>
            <p className="text" tabIndex="0">{el.text}</p>
            </div>
            <div className="cardMenu">
              
              {el.webLink === "none" ? '' :
            <a href={el.webLink} className="buttonWrapper" aria-label="link to hosted project" target="_blank" rel="noopener noreferrer" loading="lazy">
                <img className="web" src="../images/web1.png" alt="An image to represent a website" />
              </a>
        }
              <a href={el.gitLink} className="buttonWrapper" aria-label="link to github repository" target="_blank" rel="noopener noreferrer" loading="lazy">
                <img src="../images/GitHub-Mark-32px.png" alt="The GitHub Octocat logo"/>
              </a>
            </div>
            </div>
          )
          
        })) : null)}
        </div>

        {( props.shown.two === true && props.shown.three === false ? <button className="showMore" id="button2" onClick={(e) => props.onClick(e)}>Show More</button> : "")}

        <div className="cardSpacer" >
        {(props.shown.three ? (projectData3.map(function(el, index){
          return (
            
          <div className="card" key={index} id="section3">
            <div className="imageWrapper" >
              <img src={el.image} alt={el.altText} className="projectImage"/>
            </div>
            <div className="textWrap">
            <h2 className="projectsTitle" tabIndex="0">{el.name}</h2>
            <p className="text" tabIndex="0">{el.text}</p>
            </div>
            <div className="cardMenu">
              
            <a href={el.webLink} className="buttonWrapper" aria-label="link to hosted project" target="_blank" rel="noopener noreferrer" loading="lazy">
            <img className="web" src="../images/web1.png" alt="An image to represent a website" />
              </a>
              <a href={el.gitLink} className="buttonWrapper" aria-label="link to github repository" target="_blank" rel="noopener noreferrer" loading="lazy">
                <img src="../images/GitHub-Mark-32px.png" alt="The GitHub Octocat logo"/>
              </a>
            </div>
            </div>
          )
          
        })) : "")}
        </div>
      </div>
    </section>
  )
}

*/