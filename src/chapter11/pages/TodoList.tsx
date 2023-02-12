import React from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import { CallbacksType, StatesType } from "../AppContainer";


type PropsType = {
  states: StatesType,
  callbacks: CallbacksType
};

const TodoList = ({ states, callbacks }: PropsType) => {
  
  // return 전에 map돌리고 변수에 담아두기
  const todoItems = states.todoList.map(item => {
    return <TodoItem key={item.id} todoItem={item} callbacks={callbacks} />
  })

  return (
    <div className="row">
      <div className="col p-3">
        <Link className="btn btn-primary" to='/todos/add'>
          여행지 추가
        </Link>
        <button className="btn btn-primary ms-1" onClick={() => callbacks.fetchTodoList}>
          여행지 목록 새로고침
        </button>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {todoItems}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default TodoList;
