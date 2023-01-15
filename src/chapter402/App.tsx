import React from 'react'
import { ShoppingListItemType } from './AppContainer'
import InputItem from './InputItem'
import ShoppingList from './ShoppingList'


// 속성을 이용해 함수(메서드)를 전달할 때는
// => 를 기준으로 앞쪽에는 인자 형식 지정, 뒷쪽에는 함수의 리턴값의 타입 지정

type AppProps = {
  shoppingList: Array<ShoppingListItemType>,
  addItem: (item: string) => void, // void?
  toggleDone: (no: number) => void,
  deleteItem: (no: number) => void
}

const App = (props: AppProps) => {
  return (
    <div className='container'>
      <div className='card card-body bg-light'>
        <div className='title'>:: Shopping List App</div>
      </div>
      <div className='card card-default card-borderless'>
        <div className='card-body'>
          <InputItem addItem={props.addItem} />
          <ShoppingList 
            shoppingList={props.shoppingList} 
            toggleDone={props.toggleDone}
            deleteItem={props.deleteItem}
          />
        </div>
      </div>
    </div>
  )
}

export default App