import React from "react"

const Menu = ({ setShowPage, setDisplayMenu }) => (
  <ul className="Menu" onClick={() => setDisplayMenu(false)}>
    <li>
      <button onClick={() => setShowPage("home")}>Home</button>
    </li>
    <li>
      <button onClick={() => setShowPage("about")}>About</button>
    </li>
    <li>
      <button onClick={() => setShowPage("projects")}>Projects</button>
    </li>
    <li>
      <button onClick={() => setShowPage("contact")}>Contact</button>
    </li>
  </ul>
)

export default Menu
