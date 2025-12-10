import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import NavBar from './Components/NavBar.jsx'
import Header from './Components/Header.jsx'
import Logos from './Components/Logos.jsx'
import Succeed from './Components/Succeed.jsx'
import ProgramTimeline from './Components/ProgramTimeline.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <div className="page-offset">
      <Header />
      <Logos />
      <Succeed />
      <ProgramTimeline />
    </div>
  </StrictMode>,
)
