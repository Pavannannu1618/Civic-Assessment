import React, { useState } from 'react'
import './AuthForms.css'
import authService from '../services/authService'

const Login = ({ onClose, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.email) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.password) newErrors.password = 'Password is required'
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    
    if (Object.keys(newErrors).length === 0) {
      setLoading(true)
      try {
        const response = await authService.login(formData.email, formData.password)
        console.log('Login response:', response)
        setSubmitted(true)
        setTimeout(() => {
          setSubmitted(false)
          setFormData({ email: '', password: '' })
          onClose()
        }, 1500)
      } catch (error) {
        setErrors({ submit: error.message })
      } finally {
        setLoading(false)
      }
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2 className="auth-title">Login</h2>
        <p className="auth-subtitle">Welcome back! Enter your credentials to continue.</p>

        {submitted && <div className="alert alert-success">Login successful! 🎉</div>}
        {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              disabled={loading}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              disabled={loading}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <button type="button" className="btn-link-text" onClick={onSwitchToSignUp}>Sign up here</button>
        </div>
      </div>
    </div>
  )
}

export default Login
