import React from "react"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Projects from "./projects"

const Main = ({ display }) => {
  switch (display) {
    case "about":
      return <About />
    case "projects":
      return <Projects />
    case "contact":
      return <Contact />
    case "home":
    default:
      return <Home />
  }
}

export default Main
