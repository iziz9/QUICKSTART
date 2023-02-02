import React from 'react'
import connectMousePos from '../chapter7/connectMousePos'
import { MatzipListItemType } from './MatzipContext'

// List의 아이템 한 건을 속성으로 전달받아 렌더링
// 삭제, item 항목 클릭이벤트 발생 시 속성으로 받은 delete, toggle 메서드 호출

type MatzipListItemsType = {
  matzip: MatzipListItemType,
  toggleDone: (no:number) => void,
  deleteMatzip: (no:number) => void
}

const MatzipItem = (props: MatzipListItemsType) => {

let itemClassName = 'list-group-item'
if (props.matzip.done) {
  itemClassName += ' list-group-item-success'
}

  return (
    <li className={itemClassName}>
      <div className={itemClassName}>
        <span className={props.matzip.done? 'todo-done pointer' : 'pointer'}
          onClick={() => props.toggleDone(props.matzip.no)}
        >
          {props.matzip.matzip}
          {props.matzip.done ? ' (완료)' : ''}
        </span>
        <span className='float-end badge bg-secondary pointer'
          onClick={() => props.deleteMatzip(props.matzip.no)}
        >
          삭제
        </span>
      </div>
    </li>
  )
}

export default MatzipItem