import React from "react";
import produce from 'immer'

export type TodoItemType = {id:number, todo:string};

// as const로 상수로 정의
// type이 add인지 delete인지에 따라 payload의 형식이 달라지기 때문
export const TODO_ACTION = {
  ADD: 'addTodo' as const,
  DELETE: 'deleteTodo' as const,
}

export const TodoActionCreator = {
  addTodo: (todo: string) => ({ type: TODO_ACTION.ADD, payload: { todo: todo } }),
  deleteTodo: (id: number) => ({ type: TODO_ACTION.DELETE, payload: { id: id }}),
}

// 이건 무슨 연산?
export type TodoActionType = 
  | ReturnType<typeof TodoActionCreator.addTodo>
  | ReturnType<typeof TodoActionCreator.deleteTodo>

// dispatch(Action)함수 호출로 전달되는 action객체는 
// 어떤 작업을 수행할지(type)와 작업에 필요한 인자(payload)를 포함해야 함
export const TodoReducer = (state: Array<TodoItemType>, action: TodoActionType) => {

  switch (action.type) {
    case TODO_ACTION.ADD:
      return produce(state, (draft: Array<TodoItemType>) => {
        draft.push({ id: new Date().getTime(), todo: action.payload.todo })
      });
    case TODO_ACTION.DELETE:
      let index = state.findIndex(item => item.id === action.payload.id)
      return produce(state, (draft: Array<TodoItemType>) => {
        draft.splice(index, 1)
      });
    default:
      return state;
  }
};

