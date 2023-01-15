import React, {useState} from 'react'
import { ShoppingListItemType } from './AppContainer'
import ShoppingListItem from './ShoppingListItem'

// 속성으로 전달받은 list 배열데이터를 이용해 listItem 컴포넌트 반복렌더링
// 동시에 속성으로 전달받은 delete, toggle 메서드를 listItem 컴포넌트로 전달

type ShoppingListProps = {
  shoppingList: Array<ShoppingListItemType>,
  toggleDone: (no:number) => void,
  deleteItem: (no:number) => void
}

const ShoppingList = (props: ShoppingListProps) => {

  let items = props.shoppingList.map((item) => {
    return <ShoppingListItem  
      key={item.no}
      listItem={item}
      deleteItem={props.deleteItem}
      toggleDone={props.toggleDone}
      />
  })

  return (
    <div className='row'>
      {''}
      <div className='col'>
        <ul className='list-group'>{items}</ul>
      </div>
    </div>
  )
}

export default ShoppingList