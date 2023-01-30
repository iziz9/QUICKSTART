import React, {useRef, useState} from "react";

type Props = {};

const useRef01 = (props: Props) => {

  const [name, setName] = useState("현주");
  const refTel = useRef("010-1234-5678"); 

  return (
    <div className="boxStyle">
      <h2>상태 데이터</h2>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <div>상태(name) : {name} </div>
      <hr />
      <input type="text" onChange={e => (refTel.current = e.target.value)} />
      <br />
      <div> refTel 값 : {refTel.current} </div>
    </div>
  )
};

export default useRef01;
