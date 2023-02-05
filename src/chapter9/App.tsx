import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Header from "./Header";
import About from "./About";
import Members from "./Members";
import SongList from "./pages/SongList";
// import SongDetail from './pages/SongDetail'
// import SongDetail2 from "./pages/SongDetail2";
import Player from "./pages/songs/Player";
import Index from "./pages/songs/Index";

export type SongType = {id:number, title:string, youtube_link:string}

export type MemberType = {
  name: string,
  photo: string
}

const App = () => {

  const [members] = useState<Array<MemberType>>([
    { name: '김한주', photo: 'photos/khj.jfif' },
    { name: '김건재', photo: 'photos/kkj.jfif' },
    { name: '김춘추', photo: 'photos/kcc.jfif' },
    { name: '최웅희', photo: 'photos/cwh.jfif'},
  ])

  const [songs] = useState<Array<SongType>>([
    { "id": 1, "title": "NO PAIN", "youtube_link": "JaIMSzE5yLA" },
    { "id": 2, "title": "Kyo181", "youtube_link": "C8RdxCK7Uts" },
    { "id": 3, "title": "Desert Eagle", "youtube_link": "aU-zmH3lrk4" },
    { "id": 4, "title": "Hibernation", "youtube_link": "JrrQR3HCGqw" },
    { "id": 5, "title": "NEO SEOUL", "youtube_link": "SrfTBp7gHSc" },
    { "id": 6, "title": "9", "youtube_link": "_e5N11fi8o0" }
  ])

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About title={'Silica Gel'} />} />
          <Route path='/members' element={<Members members={members} />} />
          <Route path='/songs' element={<SongList songs={songs} />} >
            <Route index element={<Index />} />
            <Route path=':id' element={<Player songs={ songs } />} />
          </Route>
          {/* <Route path='/songs/:id' element={<SongDetail2 songs={songs} />} /> */}
        </Routes>
      </div>
    </Router>
  )
};

export default App;
