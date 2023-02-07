import React from "react"; 
import { useNavigate } from "react-router";
import { MemberType } from "./App";

type Props = {members: Array<MemberType>};

const Members = (props: Props) => {

  const navigate = useNavigate()
  const goHome = () => {
    if (window.confirm('메인으로 이동할까요?')) {
      navigate('/', {state: {from : '/members'}})
    }
  }

  let imgStyle = { width: 90, height: 80 }
  let list = props.members.map(member => {
    return (
      <div
        key={member.name}
        className='col-6 col-md-4 col-lg-3'
      >
        <img src={member.photo} alt={member.name}
          className='img-thumbnail' style={imgStyle} />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    )
  })

  return (
    <div>
    <h2 className="m-4">Members</h2>
    <div className="container">
      <div className="row">{list} </div>
      </div>
      <button className="btn btn-secondary" onClick={goHome}>
          Go HOME
        </button>
    </div>

  )
};

export default Members;
