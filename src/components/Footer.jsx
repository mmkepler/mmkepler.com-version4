import React from 'react'
import footerstyles from "../styles/footer.module.css"
import github from "../assets/github-mark-white.png"
import bluesky from "../assets/bluesky_media_kit_logo_3.png"
import linked from "../assets/linked.png"

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer id={footerstyles.footer}>
      <p className={footerstyles.copyright}>
      ©{year} Melissa Kepler
      </p>
      <div className={footerstyles.socialIconsFooter}>
        <span>
          <a href="https://github.com/mmkepler" target="_blank" rel="noopener noreferrer">
            <img className={footerstyles.socialIcon} id={footerstyles.github} src={github} alt="Github Octocat icon" height="32" width="32"/>
          </a>
        </span>
        <span>
          <a href="https://bsky.app/profile/mmkepler.bsky.social" target="_blank" rel="noopener noreferrer">
            <img className={footerstyles.socialIcon} id={footerstyles.bluesky} src={bluesky} alt="bluesky social icon of a blue butterfly" height="32" width="32"/>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/mmkepler/" target="_blank" rel="noopener noreferrer">
            <img className={footerstyles.socialIcon} id={footerstyles.linkedin} src={linked} alt="Linkedin logo" height="32" width="32"/>
          </a>
        </span>
      </div>
    </footer>
  )
}
