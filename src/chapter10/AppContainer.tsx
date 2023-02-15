import produce from "immer";
import React, { useState } from "react";
import App from "./App";

export type TodoItemType = {
  id: number,
  todo: string,
  desc: string,
  done: boolean
}
export type StatesType = {
  todoList: Array<TodoItemType>
}
export type CallbacksType = {
  addTodo: (todo: string, desc: string) => void,
  deleteTodo: (id: number) => void,
  toggleDone: (id: number) => void,
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void
}

const AppContainer = () => {

  const [todoList, setTodoList] = useState<Array<TodoItemType>>([
    { id: 1, todo: '와카치나', desc: '페루', done: false },
    { id: 2, todo: '렌소이스', desc: '브라질', done: false },
    { id: 3, todo: '데드블레이', desc: '나미비아', done: false },
    { id: 4, todo: '아타카마', desc: '칠레', done: false },
  ]);

  const addTodo = (todo: string, desc: string) => {
    let newTodoList = produce(todoList, (draft) => {
      draft.push({ id: new Date().getTime(), todo, desc, done: false })
    })
    setTodoList(newTodoList)
  }

  const deleteTodo = (id:number) => {
    let index = todoList.findIndex(todo => todo.id === id) // id 일치하는 리스트의 인덱스 찾기
    let newTodoList = produce(todoList, draft => {
      draft.splice(index, 1) // 인덱스로 리스트 삭제
    })
    setTodoList(newTodoList)
  }

  const toggleDone = (id: number) => {
    let index = todoList.findIndex(todo => todo.id === id)
    let newTodoList = produce(todoList, draft => {
      draft[index].done = !draft[index].done
    })
    setTodoList(newTodoList)
  }

  const updateTodo = (id: number, todo: string, desc: string, done: boolean) => {
    let index = todoList.findIndex(todo => todo.id === id)
    let newTodoList = produce(todoList, draft => {
      draft[index] = {...draft[index], todo, desc, done}
    })
    setTodoList(newTodoList)
  }

  // 상태 + 액션을 states, callbacks 객체로 묶어 한번에 속성 전달
  const callbacks: CallbacksType = { addTodo, deleteTodo, updateTodo, toggleDone }
  const states: StatesType = {todoList}

  // return <App callbacks={callbacks} states={states} />
};

export default AppContainer;
