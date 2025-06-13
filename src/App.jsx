import React from "react"
import { useState } from "react"
import { Routes, Route } from 'react-router'
import Header from './components/header'
import Hamburger from "./components/Hamburger"
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Gap from './components/Gap'
import Footer from './components/Footer'
import './styles/App.css'
import NotFound from './components/NotFound'
import Contact from "./components/contact"


function App() {
  const [menu, setMenu] = useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    setMenu(!menu)
  }

  const close = (e) => {
    e.preventDefault()
    setMenu(false)
  }

  return (
    <div id="root">
      {!menu ? <Header onClick={(e) => toggleMenu(e)}/> : <Hamburger onClick={(e) => close(e)}/>}
      <div id="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/gap" element={<Gap/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
