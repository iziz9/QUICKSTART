import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import produce from 'immer'
import 'bootstrap/dist/css/bootstrap.css'
import App01 from './chapter6/App01'
import App02 from './chapter6/App02'
import './chapter6/index.css'
import ClockContainer from './chapter6/ClockContainer'
import App03 from './chapter6/App03'
import App04 from './chapter6/App04'
import App05 from './chapter6/App05'
import App06 from './chapter6/App06'
import App07 from './chapter6/App07'
import App08 from './chapter6/App08'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='rootdiv'>
    <App01 />
    <App02 />
    <ClockContainer />
    <App03 />
    <App04 />
    <App05 />
    <App06 />
    <App07 />
    <App08 />
  </div>
)
