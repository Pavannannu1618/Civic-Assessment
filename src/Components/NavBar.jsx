import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <header className="site-header">
      <div className="top-strip" />
      <nav className="navbar navbar-expand-lg bg-white" id="navbar">
        <div className="container position-relative">
          <button aria-label="Home" className="navbar-brand d-flex align-items-center btn btn-link p-0" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src="https://www.havenark.in/assets/haven-ark-logo.BsEvOyec.png" alt="Logo" style={{ height: '44px' }} />
          </button>

          <div className="nav-center d-none d-lg-block"><button className='master'>Masterclass</button></div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navMenu">
            <div className="d-flex align-items-center">
              <button type="button" className="btn btn-link text-dark me-3">Login</button>
              <button className="btn btn-primary rounded-pill px-4" onClick={() => {
                const el = document.querySelector('#programs')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}>Get Started</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar