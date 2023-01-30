import React, {ChangeEvent, useState} from "react";

type Props = {};

const App01 = (props: Props) => {

  const [msg, setMsg] = useState<string>("");
  
  return (
    <div className="boxStyle">
      <input type='text' value={msg}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setMsg(e.target.value)} />
      <br />
      <span>입력 메시지 : {msg}</span>
    </div>
  )
};

export default App01;
