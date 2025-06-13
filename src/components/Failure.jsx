import React from 'react'
import "../styles/failure.css"

export default function Failure() {
  return (
    <div className="failure">
      <p className="warning">Red Alert</p>
      Your message was not sent<br/>
      Please refresh page and try again
    </div>
  )
}
