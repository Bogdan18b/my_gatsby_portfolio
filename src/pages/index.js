import React, { useState } from "react"
import Header from "./components/header"
import Main from "./components/main"
import Menu from "./components/menu"
import Footer from "./components/footer"
import "../styles/index.scss"

export default () => {
  let [displayMenu, setDisplayMenu] = useState(false)
  let [showPage, setShowPage] = useState("home")
  return (
    <div className="main">
      <Header displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
      {displayMenu ? (
        <Menu setShowPage={setShowPage} setDisplayMenu={setDisplayMenu} />
      ) : (
        <Main display={showPage} />
      )}
      <Footer />
    </div>
  )
}
