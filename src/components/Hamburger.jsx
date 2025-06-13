import React from 'react'
import { Link } from 'react-router'
import "../styles/header.css"
import logo from "../assets/logo2.png"

export default function Hamburger(props) {
  return (
    <nav className="nav">
      <ul className="header">
        <li className="item" tabIndex="0"><Link to="/"><img alt="" src={logo} width="60x" height="50px" ></img></Link></li>

        <li id="toggle">
          <button className="menu" onClick={props.onClick} type="button" aria-expanded="false" aria-label="hamburger menu">
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          </button>
        </li>
      </ul>
    </nav>
  )
}
