import React, {useState} from 'react'

// 미리 정의한 컴포넌트 목록 정보를 확인해 addItem 메서드를 속성으로 전달받도록 속성 타입 지정
// 사용자의 입력값을 받아내기 위해 자체적인 item 상태를 보유
// 사용자가 값을 입력하는 동안 상태를 변경
// submit 시 속성으로 전달받은 addItem 메서드를 호출

type InputItemProps = {
  addItem: (item:string) => void
}

const InputItem = (props: InputItemProps) => {

  const [item, setItem] = useState<string>('')

  const addHandler = () => {
    props.addItem(item)
    setItem('')
  }

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
      addHandler();
    }
  }

  const changeItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem(e.target.value)
  }

  return (
    <div className='row'>
      <div className='col'>
        <div className='input-group'>
          <input id='msg' type='text' className='form-control'
            name='msg' placeholder='살 물건을 입력하세요' value={item}
            onChange={changeItem} onKeyUp={enterInput} />
          <span className='btn btn-primary input-group-addon' onClick={addHandler}>
            추가
          </span>
        </div>
      </div>
    </div>
  )
}

export default InputItem