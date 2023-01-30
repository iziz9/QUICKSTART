import React from 'react'
import { ShoppingListItemType } from './AppContainer'

// List의 아이템 한 건을 속성으로 전달받아 렌더링
// 삭제, item 항목 클릭이벤트 발생 시 속성으로 받은 delete, toggle 메서드 호출

type ShoppingListItemProps = {
  listItem: ShoppingListItemType,
  toggleDone: (no:number) => void,
  deleteItem: (no:number) => void
}

const ShoppingListItem = (props: ShoppingListItemProps) => {

let itemClassName = 'list-group-item'
if (props.listItem.done) {
  itemClassName += ' list-group-item-success'
}

  return (
    <li className={itemClassName}>
      <div className={itemClassName}>
        <span className={props.listItem.done? 'todo-done pointer' : 'pointer'}
          onClick={() => props.toggleDone(props.listItem.no)}
        >
          {props.listItem.item}
          {props.listItem.done ? ' (완료)' : ''}
        </span>
        <span className='float-end badge bg-secondary pointer'
          onClick={() => props.deleteItem(props.listItem.no)}
        >
          삭제
        </span>
      </div>
    </li>
  )
}

export default ShoppingListItem