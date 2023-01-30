import { TimeFormatEnum, useClockTime } from "./useClockTime";

type Props = {};

// custom hook을 적용
const App08 = (props: Props) => {

  const currentTime = useClockTime(1000, TimeFormatEnum.HHmmssKOR)

  return (
    <div className="boxStyle">
      <h2>커스텀 훅을 적용한 시계를 또 만들었음</h2>
      <hr />
      <div>{currentTime}</div>
    </div>
  )
};

export default App08;
