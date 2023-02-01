import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import produce from 'immer'
import 'bootstrap/dist/css/bootstrap.css'
import App from './chapter7/App'
import TodoApp from './chapter7/TodoApp'
import './chapter7/index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='rootdiv'>
    <App />
    <TodoApp />
  </div>
)
