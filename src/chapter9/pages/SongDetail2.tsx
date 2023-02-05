import React, { Component } from "react";
import { useParams, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { SongType } from '../App'


type SongParam = { id?: string }
type Props = { songs: Array<SongType> };

// withSongParams에서 전달한 속성의 형식 정의
type SongDetailProps = {
  navigate: Function,
  params: SongParam,
  songs: Array<SongType>
}
type SongDetailState = {
  title: string, link: string
}

// 클래스 컴포넌트가 사용할 수 없는 훅들의 리턴값을 전달해주는 고차함수
// Component라는 클래스컴포넌트를 인수로 받아 params, navigate 속성을 사용할 수 있게 추가한 후 다시 내보냄
const withSongParams = (Component: React.ComponentType<SongDetailProps>) => {
    return (props:Props) => <Component {...props} params={useParams<SongParam>()} navigate={useNavigate()} />
  }

const YOUTUBE_LINK = 'https://m.youtube.com/watch?v='

class SongDetail2 extends Component<SongDetailProps, SongDetailState> {
  constructor(props: SongDetailProps) {
    super(props)
    this.state = {title:"", link:""}
  }

  componentDidMount() {
    const id = this.props.params.id
    const song = this.props.songs.find(song => song.id === parseInt(id ? id : ""))
    if (song) {
      this.setState({
        link: song?.youtube_link ? YOUTUBE_LINK + song?.youtube_link : '',
        title: song?.title ? song.title : ''
      })
    } else {
      this.props.navigate('/songs')
    }
  }

  render() {
  return (
    <div className="mt-5">
      <h2>{this.state.title}</h2>
      <p>
        <a href={this.state.link} target='new'>
          View Youtube
        </a>
      </p>
      <Link to='/songs'>
        Return SongList
      </Link>
      </div>
    )
  }
}

// 클래스 컴포넌트를 `고차함수의 인수로 전달해 실행한 후 리턴받은 컴포넌트`를 export 함
export default withSongParams(SongDetail2)
