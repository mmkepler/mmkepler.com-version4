import React from 'react'
import headerstyles from "../styles/header.module.css"
import { Link } from 'react-router'

export default function Header(props) {
  return (
    <nav className={headerstyles.nav}>
      <ul className={headerstyles.header}>
        <li className={headerstyles.items}>
          <Link to="/">Melissa<br></br>Kepler</Link>
        </li>
        <li className={`${headerstyles.items} ${headerstyles.single}`}>
          <Link to="/about">About</Link>
        </li>
        <li className={`${headerstyles.items} ${headerstyles.single}`}>
          <Link to="/skills">Skills</Link>
        </li>
        <li className={`${headerstyles.items} ${headerstyles.single}`}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={`${headerstyles.items} ${headerstyles.single}`}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={headerstyles.items} id={headerstyles.gapLink}>
          <Link to="/gap">Resume<br></br>Gap</Link>
        </li>
        <li className={headerstyles.toggle}>
          <button className={headerstyles.menu} onClick={props.onClick}>
          <span className={headerstyles.hamburger}></span>
          <span className={headerstyles.hamburger}></span>
          <span className={headerstyles.hamburger}></span></button>
        </li>
      </ul>
    </nav>
  )
}
