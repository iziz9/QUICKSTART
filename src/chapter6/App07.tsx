import React, {useState, useEffect} from "react";
import DateAndTime from 'date-and-time';

type Props = {};

const App07 = (props: Props) => {

  const [currentTime, setCurrentTime] = useState(DateAndTime.format(new Date(), "HH:mm:ss"));

  useEffect(() => {
    const handle = window.setInterval(() => {
      setCurrentTime(DateAndTime.format(new Date(), "HH:mm:ss"));
    }, 1000)

    return () => {
      window.clearInterval(handle);
    }
  }, [])
  
  return (
    <div className="boxStyle">
      <h2>시계를 몇 번 만들까?</h2>
      <hr />
      <div>{currentTime }</div>
    </div>
  )
};

export default App07;
