import React from "react";
import { TodoListItemType } from "./TodoApp";

type Props = {
  todoListItem: TodoListItemType
};

const TodoListBody = (props: Props) => {
  console.log("body")
  return (
    <span> {props.todoListItem.todo} </span>
  )
};

export default React.memo(TodoListBody);
