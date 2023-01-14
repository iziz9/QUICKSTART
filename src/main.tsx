import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './chapter401/App'
import App2 from './chapter401/ChangeEvent'
import App3 from './chapter401/UseRef'
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
