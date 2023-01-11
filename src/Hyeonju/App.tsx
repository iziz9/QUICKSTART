import React, { useState } from 'react'
import MatzipList from './components/MatzipList'
import "bootstrap/dist/css/bootstrap.css"

export type MatzipType = {
  no: number;
  name: string;
  stationExit: number;
  revisitIntention: boolean;
}

const spot = '강남';
const addResult = (x: string, y: string) => {
  return (
    <div className='card card-body bg-light mb-3'>
      {x + y}
    </div>
  )
}

const App = () => {
  const [list, setList] = useState<Array<MatzipType>>([
    { no: 1, name: '위트앤미트', stationExit: 11, revisitIntention: true },
    { no: 2, name: '왓쇼이켄', stationExit: 4, revisitIntention: false },
    { no: 3, name: '기리야마본진', stationExit: 4, revisitIntention: true },
    { no: 4, name: '청류벽', stationExit: 5, revisitIntention: false },
    { no: 5, name: '땀땀', stationExit: 11, revisitIntention: true }
  ])
  return (
    <div className='container'>
      <h2>맛집 리스트 {spot}!</h2>
      <hr className='dash-style' />
      {addResult('만족스러운 저녁식사를 위한', ' 강남역 맛집 리스트')}
      <MatzipList matzips={list} />
    </div>
  )
}

export default App