import {useState} from 'react'
import produce from 'immer'
import App from './App'


// 상태 정의 및 변경
// immer를 사용해 불변성을 가지도록 작성
// App 컴포넌트에 상태, 메서드를 속성으로 전달
// 상태 정의 전 todoListItem 한 건의 데이터타입 정의

export type ShoppingListItemType = {
  no: number,
  item: string,
  done: boolean
}

const AppContainer = () => {

  const [shoppngList, setShoppingList] = useState<Array<ShoppingListItemType>>([
    {no:1, item:'펜', done: false},
    {no:2, item:'브라우니', done: false},
    {no:3, item:'머리끈', done: true},
    {no:4, item:'노트북', done: false},
  ])

  const addItem = (item: string) => {
    let newShoppingList = produce(shoppngList, (draft) => {
      draft.push({no: new Date().getTime(), item: item, done: false})
    })
    setShoppingList(newShoppingList)
  }

  const deleteItem = (no: number) => {
    let index = shoppngList.findIndex((todo) => todo.no === no);
    let newShoppingList = produce(shoppngList, (draft) => {
      draft.splice(index, 1)
    })
    setShoppingList(newShoppingList)
  }

  const toggleDone = (no:number) => {
    let index = shoppngList.findIndex((item) => item.no === no);
    let newShoppingList = produce(shoppngList, (draft) => {
      draft[index].done = !draft[index].done;
    })
    setShoppingList(newShoppingList)
  }

  return (
    <App 
      shoppingList={shoppngList}
      addItem={addItem} 
      deleteItem={deleteItem}
      toggleDone={toggleDone}
     />
  )
}

export default AppContainer