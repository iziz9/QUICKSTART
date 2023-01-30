import React, { useState } from 'react'
import MatzipList from './MatzipList'
import "bootstrap/dist/css/bootstrap.css"
import styles from './styles'
import AppCssModule from './App.module.css'
import Footer from './Footer'
import { BasicButton, ItalicButton, UnderLineButton, WhiteUnderlineButton } from './Buttons'

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
  const [theme, setTheme] = useState<string>('basic');
  const [list, setList] = useState<Array<MatzipType>>([
    { no: 1, name: '위트앤미트', stationExit: 11, revisitIntention: true },
    { no: 2, name: '왓쇼이켄', stationExit: 4, revisitIntention: false },
    { no: 3, name: '기리야마본진', stationExit: 4, revisitIntention: true },
    { no: 4, name: '청류벽', stationExit: 5, revisitIntention: false },
    { no: 5, name: '땀땀', stationExit: 11, revisitIntention: true }
  ])
  return (
    <div className='container'>
      <h2 className={AppCssModule.test}>맛집 리스트 {spot}!</h2>
      <hr style={styles.dashStyle} />
      {addResult('만족스러운 저녁식사를 위한', ' 강남역 맛집 리스트')}
      <MatzipList matzips={list} />
      <BasicButton>기본버튼</BasicButton>
      <ItalicButton>이탤릭버튼</ItalicButton>
      <UnderLineButton>언더라인버튼</UnderLineButton>
      <WhiteUnderlineButton>화이트 언더라인 버튼</WhiteUnderlineButton>
      <Footer theme={theme} />
    </div>
  )
}

export default App