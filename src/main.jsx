import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import MainSession from './components/main_session.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainSession />
  </StrictMode>,
)
