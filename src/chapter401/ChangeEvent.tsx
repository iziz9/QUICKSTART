import { useState, ChangeEvent } from 'react'

const App2 = () => {
  const [x, setX] = useState<string>('')
  const [y, setY] = useState<string>('')

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: string = e.target.value;
    if (e.target.id === 'x') setX(newValue);
    else setY(newValue)
  }

  return (
    <div>
      <h3>제어 컴포넌트</h3>
      맛: <input id='x' type='text' value={x} onChange={changeValue} />
      <br />
      종류: <input id='y' type='text' value={y} onChange={changeValue} />
      <br />
      결과: <span>{x + y}</span>
    </div>
  )
}

export default App2