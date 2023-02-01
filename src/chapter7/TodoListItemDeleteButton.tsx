import React from "react";

type Props = {
  id: number,
  deleteTodo: (id:number) => void
};

const TodoListItemDelete = (props: Props) => {
  console.log("delete")
  return (
    <span
      style={{ cursor: "pointer", color: "yellowgreen" }}
      onClick={() => props.deleteTodo(props.id)}
    >
      삭제
    </span>
  )
};

export default TodoListItemDelete;
