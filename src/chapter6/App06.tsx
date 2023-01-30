import React, {useState, useMemo, useCallback} from "react";

type TodoListItemType = {
  id: number,
  todo: string,
};

const getTodoListCount = (todoList: Array<TodoListItemType>) => {
  console.log("## TodoList 카운트 : ", todoList.length)
  return todoList.length
}

const App06 = () => {

  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>("");
  const memoizedCount = useMemo<number>(() => getTodoListCount(todoList), [todoList])

  const addTodo = useCallback(
    (todo: string) => {
    let newTodoList = [...todoList, { id: new Date().getTime(), todo: todo }]
    setTodoList(newTodoList)
    setTodo("")
  }, [todoList])

  const deleteTodo = useCallback ( (id: number) => {
    let index = todoList.findIndex(item => item.id === id)
    let newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }, [todoList])

  return (
    <div className="boxStyle">
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>ADD TODO</button>
      <br />
      <ul>
        {todoList.map(item => (
          <li key={item.id}>
            {item.todo}&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>DELETE TODO</button>
          </li>
        ))}
      </ul>
      <div>todo 갯수 : {memoizedCount} </div>
    </div>
  )
};

export default App06;
