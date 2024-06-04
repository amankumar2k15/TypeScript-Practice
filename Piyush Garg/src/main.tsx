import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CounterProvider } from './provider/CounterContext.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
)
