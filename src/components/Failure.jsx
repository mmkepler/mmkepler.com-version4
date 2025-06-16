import React from 'react'
import fs from "../styles/failure.module.css"

export default function Failure() {
  return (
    <div className={fs.failure}>
      <p className={fs.styles}>Red Alert</p>
      Your message was not sent<br/>
      Please refresh page and try again
    </div>
  )
}
