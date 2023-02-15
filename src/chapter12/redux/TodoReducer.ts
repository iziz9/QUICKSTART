import produce from 'immer'
// import { TodoActionType, TODO_ACTION } from './TodoActionCreator'
import TodoActionCreator from './TodoActionCreator'
import { createReducer } from '@reduxjs/toolkit'

// 초기 상태가 사용할 타입 지정
export type TodoItemType = {
  id: number,
  todo: string,
  desc: string,
  done: boolean
}

export type TodoStatesType = { todoList: Array<TodoItemType> }

// 애플리케이션 첫 실행 시 store가 비어있으므로 리듀서가 초기 상태 제공
const initialState: TodoStatesType = {
  todoList: [
    { id: 1, todo: '와카치나', desc: '페루', done: false },
    { id: 2, todo: '렌소이스', desc: '브라질', done: false },
    { id: 3, todo: '데드블레이', desc: '나미비아', done: false },
    { id: 4, todo: '아타카마', desc: '칠레', done: false },
  ]
}

// 리덕스 툴킷 방식
// 첫번째 인자는 초기 상태값, 두번째 인자는 리듀서 기능을 만들어주는 빌더콜백 함수
// 빌더콜백의 인자로 전달된 builder 객체를 이용해 액션 생성자에 따라 각각 다른 처리를 하도록 case 추가
// addCase() 함수에 전달되는 두번째 인자인 (state, action) => {} 함수의 state는 WritableDraft한 상태
// 따라서 새로운 상태를 리턴하지 않고 state를 직접 변경해도 내부적으로 새로운 상태를 만들기 때문에,
// 불변성 라이브러리를 별도로 이용할 필요 없음.
const TodoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(TodoActionCreator.addTodo, (state, action) => {
    state.todoList.push({
      id: new Date().getTime(),
      todo: action.payload.todo,
      desc: action.payload.desc,
      done: false
    })
  })
    .addCase(TodoActionCreator.deleteTodo, (state, action) => { 
      let index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList.splice(index, 1)
    })
    .addCase(TodoActionCreator.toggleDone, (state, action) => { 
      let index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList[index].done = !state.todoList[index].done
    })
    .addCase(TodoActionCreator.updateTodo, (state, action) => { 
      let index = state.todoList.findIndex(item => item.id === action.payload.id)
      state.todoList[index] = {...action.payload}
    })
  .addDefaultCase((state, action) => state)
})





// 리덕스 방식
// 애플리케이션 첫 실행 시 undefined인 state를 initialState로 대체하도록 초기화 (꼭 필요한 작업)
// const TodoReducer = (state: TodoStatesType = initialState, action: TodoActionType) => {
//   let index: number
//   switch (action.type) { // 기존 state는 두고 새로운 state를 만들어서 리턴(리듀서는 순수함수여야 함)
//     case TODO_ACTION.ADD_TODO:
//       return produce(state, (draft) => {
//         draft.todoList.push({
//           id: new Date().getTime(),
//           todo: action.payload.todo,
//           desc: action.payload.desc,
//           done: false
//         })
//       })
//     case TODO_ACTION.DELETE_TODO:
//       index = state.todoList.findIndex(item => item.id === action.payload.id)
//       return produce(state, draft => { draft.todoList.splice(index, 1) })
//     case TODO_ACTION.TOGGLE_DONE:
//       index = state.todoList.findIndex(item => item.id === action.payload.id)
//       return produce(state, draft => { draft.todoList[index].done = !draft.todoList[index].done })
//     case TODO_ACTION.UPDATE_TODO:
//       index = state.todoList.findIndex(item => item.id === action.payload.id)
//       return produce(state, draft => { draft.todoList[index] = { ...action.payload } })
//     default:
//       return state
//     // default 로 state 자신을 리턴하도록 작성 필수
//   }
// }
export default TodoReducer