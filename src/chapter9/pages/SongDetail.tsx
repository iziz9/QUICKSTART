import React, {useState, useEffect} from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { SongType } from "../App";

type Props = {songs:Array<SongType>};
type SongParam = { id?: string }

const SongDetail = (props: Props) => {
  const { id } = useParams<SongParam>()
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>('')
  const [link, setLink] = useState<string>('')
  const YOUTUBE_LINK = 'https://m.youtube.com/watch?v='

  useEffect(() => {
    const song = props.songs.find(song => song.id === parseInt(id ? id : '', 10))
    if (song) {
      setLink(song?.youtube_link ? YOUTUBE_LINK + song.youtube_link : '')
      setTitle(song?.title ? song.title : '')
    } else {
      navigate('/songs')
    }
  })


  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>
        <a href={link} target='new'>View Youtube</a>
      </p>
      <Link to='/songs'>Return SongList</Link>
    </div>
  )
};

export default SongDetail;
