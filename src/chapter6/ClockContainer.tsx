import React, { useState } from "react";
import Clock from './Clock'

const ClockContainer = () => {

  const [formatString, setFormatString] = useState<string>("HH:mm:ss");
  const [clockVisible, setClockVisible] = useState<boolean>(false);
  
  
  return (
    <div className="boxStyle">
      <h2>시계를 또 만듭니다</h2>
      <button onClick={() => setClockVisible(!clockVisible)}>{clockVisible ? '시계 닫기' : '시계 열기'}</button>
      <hr />
      {clockVisible ? <Clock formatString={formatString} /> : ""}
    </div>
  )
};

export default ClockContainer;
