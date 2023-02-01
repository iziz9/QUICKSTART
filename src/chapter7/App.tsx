import React from "react";
import Child from "./Child";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="boxStyle">
      <h2>고차 컴포넌트 테스트</h2>
      <hr />
      <Child />
    </div>
  )
};

export default App;
