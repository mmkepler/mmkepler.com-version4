import React from 'react'
import "../styles/home.css"
import landingLogo from "../assets/Melissa_Kepler_Logo.png"

export default function Home() {
  return (
    <section id="landing">
      <img src={landingLogo} id="home-logo" alt="Logo for Melissa Kepler, with a small moon orbiting a teal planet in the background" />
    </section>
  )
}
