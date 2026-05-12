import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import ContextProvider from './contexts/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* add context provider at root */}
    <ContextProvider>
    <App />
    </ContextProvider>
  </StrictMode>,
)
