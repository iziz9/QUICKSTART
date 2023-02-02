import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import produce from 'immer'
import 'bootstrap/dist/css/bootstrap.css'
import App from './chapter8/App'
import { MatzipProvider } from './chapter8/MatzipContext'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='rootdiv'>
    <MatzipProvider>
      <App />
    </MatzipProvider>
  </div>
)
