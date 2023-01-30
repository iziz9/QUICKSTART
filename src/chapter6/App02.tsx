import React, {useState, useEffect, ChangeEvent} from "react";

const App02 = () => {
  
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('아이유');
  
  // useEffect(() => {
  //   console.log(`${name}님이 ${count}번 클릭했습니다.`)
  // });
  // 의존배열 전달하지 않음, 컴포넌트 마운트 or 내부 상태나 속성이 바뀌어 렌더링될 때 실행

  useEffect(() => {
    console.log(`${name}님이 ${count}번 클릭했습니다.`)
  }, []);
  // 빈 배열 전달, 컴포넌트가 마운트 될 때만 실행
  
  // useEffect(() => {
  //   console.log(`${name}님이 ${count}번 클릭했습니다.`)
  // }, [count]);
  // count가 변경될 때만 실행됨
  
  

  return (
    <div className="boxStyle">
      이름 변경
      <input type='text' value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <hr />
      <button onClick={() => setCount(count + 1)}>카운트 1 증가</button>
      <p>{name}님이 {count}번 클릭했습니다.</p>
    </div>
  )
};

export default App02;
