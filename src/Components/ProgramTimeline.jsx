import React, { useState } from 'react'
import './ProgramTimeline.css'

const modules = [
  {
    id: 'm1',
    month: 'Month 1',
    weeksLabel: 'Weeks 1-4',
    title: 'Foundation & Market Basics',
    weeks: [
      { weekLabel: 'Week 1-2', title: 'Investing & Market Introduction', topics: 4, icon: '📈' },
      { weekLabel: 'Week 3-4', title: 'Positional Trading & Strategies', topics: 6, icon: '📚' },
    ],
  },
  {
    id: 'm2',
    month: 'Month 2',
    weeksLabel: 'Weeks 5-9',
    title: 'Advanced Trading & Market Structure',
    weeks: [
      { weekLabel: 'Week 5-6', title: 'Trade Locations & Technical Analysis', topics: 6, icon: '🎯' },
      { weekLabel: 'Week 7-8', title: 'Futures, Options & Derivatives', topics: 7, icon: '📊' },
      { weekLabel: 'Week 9', title: 'Market Structure Foundations', topics: 5, icon: '📦' },
    ],
  },
  {
    id: 'm3',
    month: 'Month 3',
    weeksLabel: 'Weeks 10-12',
    title: 'Professional Trading & Funding',
    weeks: [
      { weekLabel: 'Week 10', title: 'Order Flow & Institutional Activity', topics: 6, icon: '💹' },
      { weekLabel: 'Week 11', title: 'Advanced Strategies & FOREX', topics: 7, icon: '💱' },
      { weekLabel: 'Week 12', title: 'Risk Management & Funding', topics: 8, icon: '🏆' },
    ],
  },
]

const ProgramTimeline = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="programs-timeline" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <button className="btn btn-success rounded-pill mb-3">Complete Curriculum</button>
          <h2 className="fw-bold">12-Week Comprehensive Program</h2>
          <p className="text-muted">Structured journey from market basics to professional trading across 3 intensive months</p>
        </div>

        <div className="timeline-list">
          {modules.map((m, i) => {
            const open = openIndex === i
            const gradient = i === 0 ? 'linear-gradient(90deg,#06b6d4,#3b82f6)' : i === 1 ? 'linear-gradient(90deg,#8b5cf6,#fb7185)' : 'linear-gradient(90deg,#10b981,#059669)'

            return (
              <div className={`timeline-item ${open ? 'open' : ''}`} key={m.id}>
                <button
                  className="timeline-header"
                  style={{ background: gradient }}
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                >
                  <div className="header-left">
                    <div className="label-row d-flex align-items-center">
                      <span className="badge-month">{m.month}</span>
                      <small className="weeks ms-3">{m.weeksLabel}</small>
                    </div>
                    <div className="title">{m.title}</div>
                  </div>
                  <div className={`chev ${open ? 'rot' : ''}`} aria-hidden>›</div>
                </button>

                <div className="timeline-body" style={{ maxHeight: open ? '1000px' : '0px' }}>
                  <div className="body-inner">
                    <div className="week-list">
                      {m.weeks.map((w, idx) => (
                        <div className="week-card" key={idx}>
                          <div className="week-left d-flex align-items-center">
                            <div className="week-icon">{w.icon}</div>
                            <div>
                              <div className="d-flex align-items-center gap-2">
                                <span className="week-pill">{w.weekLabel}</span>
                              </div>
                              <div className="week-title">{w.title}</div>
                              <div className="week-meta text-muted">{w.topics} topics • Tap to expand</div>
                            </div>
                          </div>
                          <button className="week-action btn btn-link" onClick={() => console.log('open week', w.weekLabel)} aria-label="Open week">›</button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="meta-stats mt-5 p-4 rounded-3 border text-center bg-white">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="h2 text-primary">3</div>
              <div className="text-muted">Months</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="h2 text-primary">12</div>
              <div className="text-muted">Weeks</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="h2 text-primary">70+</div>
              <div className="text-muted">Topics</div>
            </div>
            <div className="col-6 col-md-3">
              <div className="h2 text-primary">100+</div>
              <div className="text-muted">Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramTimeline
