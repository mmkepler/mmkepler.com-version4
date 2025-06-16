import React from 'react'
import resumestyles from "../styles/resume.module.css"
import myResume from "../assets/melissa_Kepler_resume.pdf"

export default function Resume() {
  return (
    <main id={resumestyles.resume}>
      <iframe src={myResume} title="Melissa Kepler's Resume" className={resumestyles.iframe}></iframe>
    </main>
  )
}
