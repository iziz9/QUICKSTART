import React, {useState, useCallback} from "react";
import TodoList from "./TodoList";

export type TodoListItemType = {
  id: number,
  todo: string,
};

// List와 todo상태 초기화
// 할일을 추가하는 상태 변경 메서드 작성
// List상태를 List컴포넌트 -> Item컴포넌트로 전달

const TodoApp = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>("")

  const addTodo = useCallback((todo: string) => {
    const newTodoList = [...todoList, {id:new Date().getTime(), todo: todo}]
    setTodoList(newTodoList)
    setTodo("")
  }, [todoList]  )
    

  const deleteTodo = useCallback ((id: number) => {
    const newTodoList = [...todoList]
    const index = todoList.findIndex(item => item.id === id)
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }, [todoList])

  return (
    <div className="boxStyle">
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>빵 추가</button>
      <br />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      <div>담은 빵 갯수 : {todoList.length}</div>
    </div>
  )
};

export default TodoApp;
