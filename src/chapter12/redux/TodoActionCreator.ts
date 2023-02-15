// 상수 선언하기
// action의 type을 지정할 때는 문자열을 사용하는데, 지정한 타입을 상수로 사용하기 위해 as const사용

import { createAction } from "@reduxjs/toolkit"

// as const : 상수 타입으로 추론할 수 있도록 하는 기능
export const TODO_ACTION = {
  ADD_TODO: 'addTodo' as const,
  DELETE_TODO: 'deleteTodo' as const,
  TOGGLE_DONE: 'toggleDone' as const,
  UPDATE_TODO: 'updateTodo' as const
}

//리덕스 툴킷 방식
// createAction 함수의 제네릭 타입으로 `전달하는 액션의 페이로드 값`을 지정
// createAction 함수의 인자로는 액션의 타입명을 문자열로 전달
const TodoActionCreator = {
  addTodo: createAction<{todo: string, desc: string}>('addTodo'),
  deleteTodo: createAction<{id:number}>('deleteTodo'),
  toggleDone: createAction<{id:number}>('toggleDone'),
  updateTodo: createAction<{id:number, todo:string, desc:string, done:boolean}>('updateTodo'),
}


// 객체 형태로 인자를 전달받아 액션 메시지 객체를 만듦 (리덕스 방식)
//  const TodoActionCreator = {
//   addTodo: (todoItem: { todo: string, desc: string }) => {
//     return {type: TODO_ACTION.ADD_TODO, payload: todoItem}
//   },
//   deleteTodo: (todoItem: { id: number }) => {
//     return {type: TODO_ACTION.DELETE_TODO, payload: todoItem}
//   },
//   toggleDone: (todoItem: { id: number }) => {
//     return {type: TODO_ACTION.TOGGLE_DONE, payload: todoItem}
//   },
//   updateTodo: (todoItem: { id: number, todo: string, desc: string, done: boolean }) => {
//     return {type: TODO_ACTION.UPDATE_TODO, payload: todoItem}
//   }
// }

// TodoReducer에서 사용할 액션 타입을 액션크리에이터 함수들의 리턴값을 조합해 선언한 것
export type TodoActionType =
  | ReturnType<typeof TodoActionCreator.addTodo>
  | ReturnType<typeof TodoActionCreator.deleteTodo>
  | ReturnType<typeof TodoActionCreator.toggleDone>
  | ReturnType<typeof TodoActionCreator.updateTodo>;

export default TodoActionCreator