import React from 'react'
import './Succeed.css'

const Succeed = () => {
  return (
    <section id="succeed" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
        <div className="haven">Why Haven Ark</div>
          <h2 className="display-6 fw-bold">Everything you need to <span className="accent">succeed</span></h2>
          <p className="text-muted">A comprehensive approach to trading education designed for serious learners</p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7" id="mentor-card">
            <div className="card big-card h-100 p-4" >
              <div className="icon-box mb-3">🎓</div>
              <h3 className="mb-2">Expert Mentorship</h3>
              <p className="text-muted">Learn directly from traders with 9+ years of market experience</p>

              <div className="mt-4">
                <span className="chip">Technical Analysis</span>
                <span className="chip">Options Trading</span>
                <span className="chip">Risk Management</span>
              </div>
            </div>
          </div>

          <div className="col-lg-5" id="mentor-card">
            <div className="row g-4">
              <div className="col-6">
                <div className="card small-card h-100 p-3">
                  <div className="icon-box mb-2">🧠</div>
                  <h5>Proven Strategies</h5>
                  <p className="text-muted small">Master techniques used by professional institutional traders</p>
                </div>
              </div>

              <div className="col-6" id="mentor-card">
                <div className="card small-card h-100 p-3">
                  <div className="icon-box mb-2">🛡️</div>
                  <h5>Risk Management</h5>
                  <p className="text-muted small">Protect your capital with institutional-grade risk frameworks</p>
                </div>
              </div>

              <div className="col-12" id="mentor-card">
                <div className="card small-card h-100 p-3">
                  <div className="icon-box mb-2">📈</div>
                  <h5>Live Market Training</h5>
                  <p className="text-muted small">Practice with real market conditions and expert guidance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Succeed
