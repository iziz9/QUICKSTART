import React from "react";
import { TodoListItemType } from "./TodoApp";
import TodoListBody from "./TodoListBody";
import TodoListItemDelete from "./TodoListItemDeleteButton";

type Props = {
  todoListItem: TodoListItemType,
  deleteTodo: (id:number) => void,
};

const TodoListItem = (props: Props) => {
  console.log('** todoListItem');
  return (
    <li style={{marginTop:"15px"}}>
      <TodoListBody todoListItem={props.todoListItem} />
      <TodoListItemDelete deleteTodo={props.deleteTodo} id={ props.todoListItem.id} />
    </li>
  )
};

export default React.memo(TodoListItem)
