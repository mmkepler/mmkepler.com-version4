import React from 'react'
import "../styles/resume.css"
import myResume from "../assets/melissa_Kepler_resume.pdf"

export default function Resume() {
  return (
    <main id="resume">
      <iframe src={myResume} title="Melissa Kepler's Resume"></iframe>
    </main>
  )
}
