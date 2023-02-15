import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { CallbacksType, StatesType, TodoItemType } from "../AppContainer";
import TodoActionCreator from "../../chapter12/redux/TodoActionCreator";
import { connect } from "react-redux";
import { TodoStatesType, TodoItemType } from "../../chapter12/redux/TodoReducer";
import {AnyAction, Dispatch} from 'redux'



type PropsType = {
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => void
  todoList: Array<TodoItemType>
};

type TodoParam = {id?: string}

const EditTodo = ({ todoList, updateTodo }: PropsType) => {
  
  const navigate = useNavigate()
  let { id } = useParams<TodoParam>()
  let todoItem = todoList.find(item => item.id === parseInt(id ? id : '0')) 
  if (!todoItem) { 
    navigate('/todos') //할일 아이템이 없을 때 다시 /todos로 이동
    return <></>
  }
  const [todoOne, setTodoOne] = useState<TodoItemType>({ ...todoItem })
  
  const updateTodoHandler = () => {
    if (todoOne.todo.trim() === '' || todoOne.desc.trim() === '') {
      alert('반드시 할 일과 설명을 입력해야 합니다.')
      return
    }
    let { id, todo, desc, done } = todoOne
    updateTodo(id, todo, desc, done)
    navigate('/todos')
  }
  

  return (
    <>
      <div className="row">
        <div className="col p-3">
          <h2>여행지 수정</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todo">여행지 : </label>
            <input type='text' className="form-control" id='todo' value={todoOne.todo} onChange={(e) => setTodoOne({ ...todoOne, todo: e.target.value })} />
            {/* 전개연산자를 사용하지 않고 원본을 사용하면 입력상태를 필드에 바인딩하고 타이핑할 때 즉시 원본이 변경될 수 있음 */}
          </div>
          <div className="form-group">
            <label htmlFor="desc">
              설명:
            </label>
            <textarea className="form-control" rows={3} id='desc' value={todoOne.desc} onChange={e => setTodoOne({...todoOne, desc:e.target.value })}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="done">완료 여부</label>{' '}
            <input type='checkbox' checked={todoOne.done} onChange={(e) => setTodoOne({...todoOne, done:e.target.checked})} />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary m-1" onClick={updateTodoHandler}>
              수정하기
            </button>
            <button type="button" className="btn btn-primary m-1" onClick={() => navigate('/todos')}>
              취소
            </button>
          </div>
        </div>
        </div>
    </>
  )
};

const mapStateToProps = (state: TodoStatesType) => ({
  todoList: state.todoList
})
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  updateTodo: (id: number, todo: string, desc: string, done: boolean) => 
      dispatch(TodoActionCreator.updateTodo({id, todo, desc, done}))
})
const EditTodoContainer = connect(mapStateToProps, mapDispatchToProps)(EditTodo)

export default EditTodoContainer

// type PropsType = {
//   callbacks: CallbacksType,
//   states: StatesType
// };
// type TodoParam = {id?: string}

// const EditTodo = ({ callbacks, states }: PropsType) => {
  
//   const navigate = useNavigate()
//   let { id } = useParams<TodoParam>()
//   let todoItem = states.todoList.find(item => item.id === parseInt(id ? id : '0')) 
//   if (!todoItem) { 
//     navigate('/todos') //할일 아이템이 없을 때 다시 /todos로 이동
//     return <></>
//   }
//   const [todoOne, setTodoOne] = useState<TodoItemType>({ ...todoItem })
  
//   const updateTodoHandler = () => {
//     if (todoOne.todo.trim() === '' || todoOne.desc.trim() === '') {
//       alert('반드시 할 일과 설명을 입력해야 합니다.')
//       return
//     }
//     let { id, todo, desc, done } = todoOne
//     callbacks.updateTodo(id, todo, desc, done)
//     navigate('/todos')
//   }
  

//   return (
//     <>
//       <div className="row">
//         <div className="col p-3">
//           <h2>여행지 수정</h2>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="todo">여행지 : </label>
//             <input type='text' className="form-control" id='todo' value={todoOne.todo} onChange={(e) => setTodoOne({ ...todoOne, todo: e.target.value })} />
//             {/* 전개연산자를 사용하지 않고 원본을 사용하면 입력상태를 필드에 바인딩하고 타이핑할 때 즉시 원본이 변경될 수 있음 */}
//           </div>
//           <div className="form-group">
//             <label htmlFor="desc">
//               설명:
//             </label>
//             <textarea className="form-control" rows={3} id='desc' value={todoOne.desc} onChange={e => setTodoOne({...todoOne, desc:e.target.value })}></textarea>
//           </div>
//           <div className="form-group">
//             <label htmlFor="done">완료 여부</label>{' '}
//             <input type='checkbox' checked={todoOne.done} onChange={(e) => setTodoOne({...todoOne, done:e.target.checked})} />
//           </div>
//           <div className="form-group">
//             <button type="button" className="btn btn-primary m-1" onClick={updateTodoHandler}>
//               수정하기
//             </button>
//             <button type="button" className="btn btn-primary m-1" onClick={() => navigate('/todos')}>
//               취소
//             </button>
//           </div>
//         </div>
//         </div>
//     </>
//   )
// };

// export default EditTodo;
