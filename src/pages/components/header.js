import React, { useState } from "react"
import Logo from "../../generated"

export default ({ displayMenu, setDisplayMenu }) => {
  return (
    <header className="Header">
      <Logo />

      <span
        className={`Header-button ${displayMenu ? "is-transformed" : ""}`}
        onClick={() => setDisplayMenu(display => !display)}
      ></span>
    </header>
  )
}
