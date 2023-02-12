import {fetchTodoList, TodoItem} from '../BackEndAPI'

const reader = fetchTodoList()

const TodoList2 = () => {
  const todoList = reader.read() as Array<TodoItem>
  return (
    <div>
<h2>여행지 정보</h2>
<ul className='todos'>
  {todoList.map(todoItem => (
    <li key={todoItem.id}>
      {todoItem.todo}, {todoItem.desc}
    </li>
  ))}
</ul>
    </div>
  )
}

export default TodoList2