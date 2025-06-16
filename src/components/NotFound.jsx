import React from 'react'
import styles from  "../styles/notfound.module.css"

export default function NotFound() {
  return (
    <main id={styles.notfound}>
      <h1 id={styles.notfound_warn}>404</h1>
        <h2 className={styles.subtitle}>The page you are looking for is not here</h2>
    </main>
  )
}
