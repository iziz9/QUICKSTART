import React from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
// import { CallbacksType, StatesType, TodoItemType } from "../AppContainer";
import TodoActionCreator from "../../chapter12/redux/TodoActionCreator";
import { AnyAction, Dispatch } from 'redux'
import { connect } from 'react-redux'
import {TodoStatesType, TodoItemType} from "../../chapter12/redux/TodoReducer";

type PropsType = {
  todoList: Array<TodoItemType>,
  deleteTodo: (id: number) => void,
  toggleDone: (id: number) => void
};

const TodoList = ({todoList, deleteTodo, toggleDone}: PropsType) => {
  
  // return 전에 map돌리고 변수에 담아두기
  const todoItems = todoList.map(item => {
    return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />
  })

  return (
    <div className="row">
      <div className="col p-3">
        <Link className="btn btn-primary" to='/todos/add'>
          여행지 추가
        </Link>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {todoItems}ㅜ
          </ul>ㅜㅜ
        </div>
      </div>
    </div>
  )
};

// 상태와 이 컴포넌트 속성을 매핑하는 정보를 리턴
// 컴포넌트의 todoList 속성에 state의 todoList를 매핑
const mapStateToProps = (state: TodoStatesType) => ({
  todoList: state.todoList
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  deleteTodo: (id: number) => dispatch(TodoActionCreator.deleteTodo({ id })),
  toggleDone: (id:number) => dispatch(TodoActionCreator.toggleDone({id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

// type PropsType = {
//   states: StatesType,
//   callbacks: CallbacksType
// };

// const TodoList = ({ states, callbacks }: PropsType) => {
  
//   // return 전에 map돌리고 변수에 담아두기
//   const todoItems = states.todoList.map(item => {
//     return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />
//   })

//   return (
//     <div className="row">
//       <div className="col p-3">
//         <Link className="btn btn-primary" to='/todos/add'>
//           여행지 추가
//         </Link>
//       </div>
//       <div className="row">
//         <div className="col">
//           <ul className="list-group">
//             {todoItems}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default TodoList;
