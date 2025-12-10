import React from 'react'
import './Logos.css'

const logos = [
  'https://www.havenark.in/assets/hans-india-logo.B4Wr_x3v.png',
  'https://www.havenark.in/assets/yourstory-logo.uvyRKD6b.png',
  'https://www.havenark.in/assets/haven-ark-logo.BsEvOyec.png',
  'https://www.havenark.in/assets/hans-india-logo.B4Wr_x3v.png',
  'https://www.havenark.in/assets/yourstory-logo.uvyRKD6b.png',
  'https://www.havenark.in/assets/haven-ark-logo.BsEvOyec.png'
]

const Logos = () => {
  const duration = 18 // seconds for a single logo to cross
  const items = logos
  const spacingMultiplier = 1.3 // increase delay spacing to reduce overlap

  return (
    <section className="logos-marquee py-3">
      <div className="container position-relative">
        <div className="logos-line" aria-hidden="false">
          {items.map((src, i) => {
            const delay = (i * (duration / items.length) * spacingMultiplier)
            return (
              <div
                className="logo-item"
                key={i}
                style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s` }}
              >
                <img src={src} alt={`logo-${i}`} loading="lazy" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Logos
