import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Worldclock from './components/worldclock.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Worldclock />
  </StrictMode>,
)
