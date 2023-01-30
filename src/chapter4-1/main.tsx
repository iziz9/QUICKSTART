import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App2 from './ChangeEvent'
import App3 from './UseRef'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <br />
    <App2 />
    <br />
    <br />
    <App3 />
  </React.StrictMode>,
)
