import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TextStats from './TextStats.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
<TextStats/>
  </StrictMode>,
)
