import React from 'react'
import "../styles/header.css"
import { Link } from 'react-router'

export default function Header(props) {
  return (
    <nav className="nav">
      <ul className="header">
        <li className="items">
          <Link to="/">Melissa<br></br>Kepler</Link>
        </li>
        <li className="items single">
          <Link to="/about">About</Link>
        </li>
        <li className="items single">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="items single">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="items single">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="items" id="gapLink">
          <Link to="/gap">Resume<br></br>Gap</Link>
        </li>
        <li className="toggle">
          <button className="menu" onClick={props.onClick}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span></button>
        </li>
      </ul>
    </nav>
  )
}
