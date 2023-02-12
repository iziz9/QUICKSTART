import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import produce from 'immer'
import 'bootstrap/dist/css/bootstrap.css'
import { MatzipProvider } from './chapter8/MatzipContext'
import AppContainer from './chapter11/AppContainer'
// import App from './chpater11/App'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='rootdiv'>
    <AppContainer />
  </div>
)
