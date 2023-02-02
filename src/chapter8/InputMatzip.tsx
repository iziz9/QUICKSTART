import React, { useState, useContext } from 'react'
import MatzipContext from './MatzipContext'


const inputMatzip = () => {

  const [matzip, setMatzip] = useState<string>('')

  //useContext로 Context의 value 받기
  const value = useContext(MatzipContext)

  //value속성 - actions의 addMatzip함수 호출
  const addHandler = () => {
    value?.actions.addMatzip(matzip)
    setMatzip('')
  }

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      addHandler();
    }
  }

  const changeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatzip(e.target.value)
  }

  return (
    <div className='row'>
      <div className='col'>
        <div className='input-group'>
          <input id='msg' type='text' className='form-control'
            name='msg' placeholder='새로운 맛집을 입력하세요' value={matzip}
            onChange={changeItem} onKeyUp={enterInput} />
          <span className='btn btn-primary input-group-addon' onClick={addHandler}>
            추가
          </span>
        </div>
      </div>
    </div>
  )
}

export default inputMatzip