import React, { ChangeEvent, useState } from "react";

type Props = {
  idChange?: (e:ChangeEvent<HTMLInputElement>) => void;
  pwChange?: (e:ChangeEvent<HTMLInputElement>) => void;
};

const Id = ({ idChange }: Props) => {
  // onchange로 input 입력값이 4 미만일 때는 4글자 이상 입력하라는 경고문구 띄우기
  return (
    <>
        <label>아이디</label>
        <input type='text' className="m-3" onChange={idChange} />
    </>
  )
}

const Pw = ({ pwChange }: Props) => {
  return (
    <>
        <label>비밀번호</label>
        <input type='password' className="m-3"  onChange={pwChange} />
    </>
  )
}

const Home = () => {
  const [id, setId] = useState('')
  const idChange = (e:ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value)
  }

  const [pw, setPw] = useState('')
  const pwChange = (e:ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value)
  }

  const loginClick = () => {
    alert(`id : ${id}, pw: ${pw}`)
  }


  return (
    <div className="card card-body">
      <h2>Login</h2>
      <div className="p-5">
        <Id idChange={idChange} />
        <Pw pwChange={pwChange} />
        <button disabled={id.length < 4 || pw.length < 8} onClick={loginClick}>Login</button>
      </div>
    </div>
  )
};




export default Home;
