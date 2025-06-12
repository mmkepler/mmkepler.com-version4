import React from 'react'
import "../styles/header.css"
import logo from "../assets/logo2.png"

export default function Hamburger(props) {
  return (
    <nav className="nav">
      <ul className="header">
        <li className="item" tabIndex="0"><Link  activeClass="active" to="home" smooth={true} offset={-80}><Image alt="" src={logo} width="60x" height="50px" ></Image></Link></li>

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
