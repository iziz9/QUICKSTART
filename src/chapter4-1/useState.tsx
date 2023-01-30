import { useState } from 'react'
// import Calc from './Calc'

function App() {
  // const [x, setX] = useState<number>(100)
  // const [y, setY] = useState<number>(200)
  // const [oper, setOper] = useState<string>('+')


  const [count, setCount] = useState<number>(0)
  const increment = () => {
    setCount((count) => count + 1)
    setCount((count) => count + 1)
    setCount((count) => count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }


  return (
    <div className="App" style={{ margin: '5px' }}>
      {/* <Calc x={x} /> */}
      <h3>이벤트 기초</h3>
      <div>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
      </div>
      <div>
        카운트: <input type='text' value={count} />
      </div>
    </div>
  )
}

export default App
