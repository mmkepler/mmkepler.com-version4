import React from 'react'
import { Link } from 'react-router'
import headerstyles from "../styles/header.module.css"

export default function Hamburger(props) {
  return (
    <nav id={headerstyles.mobile}>
      <button type="button" className={headerstyles.close} onClick={props.onClick}>x</button>
      <ul>
        <li  className={headerstyles.link}>
          <Link to="/" onClick={props.onClick}>Home</Link>
        </li>
        <li className={headerstyles.link}>
          <Link to="/about" onClick={props.onClick} >About</Link>
        </li>
        <li className={headerstyles.link}>
          <Link to="/skills" onClick={props.onClick} >Skills</Link>
        </li>
        <li className={headerstyles.link}>
          <Link to="/projects" onClick={props.onClick} >Projects</Link>
        </li>
        <li className={headerstyles.link}>
          <Link to="/contact" onClick={props.onClick} >Contact</Link>
        </li>
        <li className={headerstyles.link}>
          <Link to="/gap" onClick={props.onClick}>Resume Gap</Link>
        </li>
      </ul>
    </nav>
  )
}
