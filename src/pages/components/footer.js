import React from "react"

export default () => {
  return (
    <footer className="Footer">
      <section className="Footer-icons">
        <a href="https://www.linkedin.com/in/bogdanbobletec/">
          <i className="fa fa-envelope fa-2x"></i>
        </a>
        <a href="https://github.com/Bogdan18b/">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/bogdanbobletec/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </section>
      <p>&copy;copyright Bogdan Bobletec {new Date().getFullYear()}</p>
    </footer>
  )
}
