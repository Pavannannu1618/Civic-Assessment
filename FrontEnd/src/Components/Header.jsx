import React from 'react'
import "./Header.css"
import heroImage from '../assets/image.png';
const Header = () => {
  const handleCTAClick = (e) => {
    e.preventDefault()
    const el = document.querySelector('#programs')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    console.log('CTA clicked: navigate to Programs')
  }

  return (
    <header className="hero py-5 bg-light">
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="hero-title">Master the Art of <span className="accent">Trading</span></h1>
            <p className="hero-sublead">Join 30,000+ traders who've transformed their trading journey. Learn from mentors with 9+ years of market expertise.</p>

            <div className="d-flex align-items-center mt-4">
              <button className="btn btn-primary  me-3" onClick={handleCTAClick}>Start Learning Today →</button>
              <button className="btn btn-outline-secondary " onClick={() => console.log('View Programs')}>View Programs</button>
            </div>

            <div className="d-flex gap-4 mt-5 stats">
              <div>
                <div className="h4 mb-0">👥 30,000+</div>
                <div className="text-muted">Active Students</div>
              </div>
              <div>
                <div className="h4 mb-0">🏅 9+</div>
                <div className="text-muted">Years of Experience</div>
              </div>
              <div>
                <div className="h4 mb-0">⚡ 500+</div>
                <div className="text-muted">Live Sessions</div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block">
            <div className="hero-card ms-auto">
              <img src={heroImage} alt="Hero card" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-12 d-block d-lg-none mt-4">
            <div className="hero-card-mobile">
              <img src={heroImage} alt="Hero card" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header