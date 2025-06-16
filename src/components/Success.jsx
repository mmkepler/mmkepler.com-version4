import React from 'react'
import ss from "../styles/success.module.css"

export default function Success() {
  return (
    <div id={ss.success} className={ss.success}>
      <p className={ss.title}>Success!</p>
      Your message has been sent.
    </div>
  )
}
