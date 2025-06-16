import React from 'react'
import homestyles from  "../styles/home.module.css"
import landingLogo from "../assets/Melissa_Kepler_Logo.png"

export default function Home() {
  return (
    <section id={homestyles.landing}>
      <img src={landingLogo} id={homestyles.homelogo} alt="Logo for Melissa Kepler, with a small moon orbiting a teal planet in the background" />
    </section>
  )
}
