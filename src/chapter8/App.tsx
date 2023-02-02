import React, { useState } from 'react'
import MatzipList from './MatzipList'
import "bootstrap/dist/css/bootstrap.css"
import InputItem from './InputMatzip'

const App = () => {
  return (
    <div className='container'>
      <div className='card card-body bg-light'>
        <div className='title'>:: 송탄 맛집리스트</div>
      </div>

      <div className='card card-default card-borderless'>
        <div className='card-body'>
          <InputItem />
          <MatzipList />
        </div>
      </div>
    </div>
  )
}

export default App