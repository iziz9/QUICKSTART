import React from "react";
import { TodoListItemType } from "./TodoApp";
import TodoListItem from "./TodoListItem";

type Props = {
  todoList: Array<TodoListItemType>,
  deleteTodo: (id:number) => void,
};

const TodoList = (props: Props) => {
  console.log('## todolist')
  return (
    <ul>
      {props.todoList.map(item => (
        <TodoListItem key={item.id} todoListItem={item} deleteTodo={props.deleteTodo} />
      ))}
    </ul>
  )
};

export default React.memo(TodoList);
