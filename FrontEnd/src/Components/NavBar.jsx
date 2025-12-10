import React, { useState, useEffect } from 'react'
import "./NavBar.css"
import Login from './Login'
import SignUp from './SignUp'
import authService from '../services/authService'

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Check if user is logged in on mount
    const loggedInUser = authService.getUser()
    if (loggedInUser) {
      setIsLoggedIn(true)
      setUser(loggedInUser)
    }

    // Close mobile menu on scroll
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
        // Also collapse the navbar menu
        const navbarToggle = document.querySelector('.navbar-toggler')
        const navbarCollapse = document.querySelector('.navbar-collapse')
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          navbarToggle.click()
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mobileMenuOpen])

  const handleLoginClose = () => setShowLoginModal(false)
  const handleSignUpClose = () => setShowSignUpModal(false)
  
  const handleSwitchToSignUp = () => {
    setShowLoginModal(false)
    setShowSignUpModal(true)
  }
  
  const handleSwitchToLogin = () => {
    setShowSignUpModal(false)
    setShowLoginModal(true)
  }

  const handleLoginSuccess = () => {
    const loggedInUser = authService.getUser()
    setUser(loggedInUser)
    setIsLoggedIn(true)
    setShowLoginModal(false)
    setShowSignUpModal(false)
    setMobileMenuOpen(false)
    // Close mobile menu
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      document.querySelector('.navbar-toggler').click()
    }
  }

  const handleLogout = () => {
    authService.logout()
    setIsLoggedIn(false)
    setUser(null)
  }

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleGetStartedClick = () => {
    setMobileMenuOpen(false)
    // Close mobile menu
    const navbarCollapse = document.querySelector('.navbar-collapse')
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      document.querySelector('.navbar-toggler').click()
    }
    // Scroll to programs
    const el = document.querySelector('#programs')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header className="site-header">
        <div className="top-strip" />
        <nav className="navbar navbar-expand-lg bg-white" id="navbar">
          <div className="container position-relative">
            <button aria-label="Home" className="navbar-brand d-flex align-items-center btn btn-link p-0" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              <img src="https://www.havenark.in/assets/haven-ark-logo.BsEvOyec.png" alt="Logo" style={{ height: '44px' }} />
            </button>

            <div className="nav-center d-none d-lg-block"><button className='master'>Masterclass</button></div>

            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navMenu" 
              aria-controls="navMenu" 
              aria-expanded={mobileMenuOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <span style={{ fontSize: '24px', color: '#111827' }}>✕</span>
              ) : (
                <span className="navbar-toggler-icon" />
              )}
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navMenu">
              <div className="d-flex align-items-center">
                {isLoggedIn ? (
                  <>
                    <span className="text-dark me-3 d-none d-md-inline">
                      Welcome, {user?.name || 'User'}!
                    </span>
                    <button 
                      type="button" 
                      className="btn btn-link text-danger me-3" 
                      onClick={() => {
                        handleLogout()
                        setMobileMenuOpen(false)
                        const navbarCollapse = document.querySelector('.navbar-collapse')
                        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                          document.querySelector('.navbar-toggler').click()
                        }
                      }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button 
                    type="button" 
                    className="btn btn-link text-dark me-3" 
                    onClick={() => {
                      setShowLoginModal(true)
                      setMobileMenuOpen(false)
                      const navbarCollapse = document.querySelector('.navbar-collapse')
                      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                        document.querySelector('.navbar-toggler').click()
                      }
                    }}
                  >
                    Login
                  </button>
                )}
                <button className="btn btn-primary rounded-pill px-4" onClick={handleGetStartedClick}>Get Started</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {showLoginModal && <Login onClose={handleLoginClose} onSwitchToSignUp={handleSwitchToSignUp} onLoginSuccess={handleLoginSuccess} />}
      {showSignUpModal && <SignUp onClose={handleSignUpClose} onSwitchToLogin={handleSwitchToLogin} onLoginSuccess={handleLoginSuccess} />}
    </>
  )
}

export default NavBar