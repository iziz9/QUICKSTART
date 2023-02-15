import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import produce from 'immer'
import 'bootstrap/dist/css/bootstrap.css'
import { MatzipProvider } from './chapter8/MatzipContext'
// import AppContainer from './chapter11/AppContainer'
import AppContainer from './chapter10/AppContainer'
import App from './chapter10/App'
import AppStore from './chapter12/redux/Appstore'
import {Provider} from 'react-redux'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={AppStore}>
  <div className='rootdiv'>
    <App />
  </div>
  </Provider>
)
