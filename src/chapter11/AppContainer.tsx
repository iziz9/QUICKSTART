import produce from "immer";
import React, { useEffect, useState } from "react";
import App from "./App";
import axios from 'axios'

export type TodoItemType = {
  id: number,
  todo: string,
  desc: string,
  done: boolean
}
export type StatesType = {
  todoList: Array<TodoItemType>,
  isLoading: boolean
}
export type CallbacksType = {
  fetchTodoList: () => void,
  addTodo: (todo: string, desc: string, callback: () => void) => void,
  deleteTodo: (id: number) => void,
  toggleDone: (id: number) => void,
  updateTodo: (id: number, todo: string, desc: string, done: boolean, callback: () => void) => void
}

const USER = 'gdhong'
// const BASEURI = '/api/todolist/'+ USER
const BASEURI = '/api/todolist_long/'+ USER

const AppContainer = () => {

  const [todoList, setTodoList] = useState<Array<TodoItemType>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchTodoList()
  }, [])

  const fetchTodoList = async () => {
    setTodoList([])
    setIsLoading(true)
    try {
      const res = await axios.get(BASEURI)
      // const res = await axios.get(baseURI)
      setTodoList(res.data)
    } catch (err) {
      if (err instanceof Error) {
        alert('조회 실패' + err.message)
      } else {
        alert('조회 실패 :'+ err)
      }
    }
    setIsLoading(false)
  }

  // 할일 추가를 성공하면 마지막 인자로 전달된 callback을 호출
  const addTodo = async (todo: string, desc: string, callback: () => void) => {
    setIsLoading(true)
    try {
      const res = await axios.post(BASEURI, {todo, desc})
      if (res.data.status === 'success') {
        // 한건의 할일 추가가 성공이라면 전체목록을 재조회하는 것이 아니라 추가된 한 건의 정보만 state에 추가
        let newTodoList = produce(todoList, (draft) => {
          draft.push({...res.data.item, done: false})
        })
        setTodoList(newTodoList)
        callback()
      } else {
        alert('할 일 추가 실패' + res.data.message)
      } 
    } catch (err) {
      if (err instanceof Error) {
        alert('할 일 추가 실패' + err.message)
      } else {
        alert('할 일 추가 실패 :'+ err)
      }
    }
    setIsLoading(false)
  }

  const deleteTodo = async (id: number) => {
    setIsLoading(true)
    try {
      const res = await axios.delete(`${BASEURI}/${id}`)
      if (res.data.status === 'success') {
        let index = todoList.findIndex(todo => todo.id === id) // id 일치하는 리스트의 인덱스 찾기
        let newTodoList = produce(todoList, draft => {
          draft.splice(index, 1) // 인덱스로 리스트 삭제
        })
        setTodoList(newTodoList)
      }
    } catch (err) {
      if (err instanceof Error) {
        alert('할 일 삭제 실패' + err.message)
      } else {
        alert('할 일 삭제 실패 :'+ err)
      }
    }
    setIsLoading(false)
  }

  const toggleDone = async (id: number) => {
    setIsLoading(true)
    try {
      let todoItem = todoList.find(todo => todo.id === id)
      const res = await axios.put(`${BASEURI}/${id}`, { ...todoItem, done: !todoItem?.done })
      if (res.data.status === 'success') {
        let index = todoList.findIndex(todo => todo.id === id)
        let newTodoList = produce(todoList, draft => {
          draft[index].done = !draft[index].done
        })
        setTodoList(newTodoList)
      }
    } catch (err) {
      if (err instanceof Error) {
        alert('완료 토글 실패 :' + err.message)
      } else {
        alert('완료 토글 실패 :'+ err)
      }
    }
    setIsLoading(false)
  }

  const updateTodo = async (id: number, todo: string, desc: string, done: boolean, callback: () => void) => {
    setIsLoading(true)
    try {
      const res = await axios.put(`${BASEURI}/${id}`, {todo, desc, done})
      if (res.data.status === 'success') {
        let index = todoList.findIndex(todo => todo.id === id)
        let newTodoList = produce(todoList, draft => {
          draft[index] = {...draft[index], todo, desc, done}
        })
        setTodoList(newTodoList)
        callback()
      } else {
        alert('할 일 수정 실패' + res.data.message)
      } 
    } catch (err) {
      if (err instanceof Error) {
        alert('할 일 수정 실패' + err.message)
      } else {
        alert('할 일 수정 실패 :'+ err)
      }
    }
    setIsLoading(false)
  }

  // 상태 + 액션을 states, callbacks 객체로 묶어 한번에 속성 전달
  const callbacks: CallbacksType = { fetchTodoList, addTodo, deleteTodo, updateTodo, toggleDone }
  const states: StatesType = {todoList, isLoading}

  // return <App callbacks={callbacks} states={states} />
  return <App />
};

export default AppContainer;
