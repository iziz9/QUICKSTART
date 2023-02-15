import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CallbacksType } from "../AppContainer";
import TodoActionCreator from "../../chapter12/redux/TodoActionCreator";
import { connect } from 'react-redux'
import { AnyAction, Dispatch } from 'redux'

type PropsType = {
  addTodo: (todo: string, desc: string) => void;
};

const Addtodo = ({addTodo}: PropsType) => {
  
  const navigate = useNavigate()

  const [todo, setTodo] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  
  const addTodoHandler = () => {
    if (todo.trim() === '' || desc.trim() === '') {
      alert('반드시 여행지와 설명을 모두 입력해야 합니다.')
      return
    }
    addTodo(todo, desc)
    navigate('/todos')
  }


  return (
    <>
      <div className="row">
        <div className="col p-3">
          <h2>여행지 추가</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="todo">가고싶은 여행지 : </label>
            <input type='text' className="form-control" id='todo' value={todo} onChange={e => setTodo(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="desc">설명 : </label>
            <textarea className="form-control" rows={3} id='desc' value={desc} onChange={e => setDesc(e.target.value)}></textarea>
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary m-1" onClick={addTodoHandler}>
              추가하기
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

// 속성으로 전달할 상태가 없기 때문에 mapStateToProps를 connect() 고차함수에 전달하지 않음
// 이런 경우null을 인자로 전달하면 됨
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  addTodo: (todo:string, desc:string) => dispatch(TodoActionCreator.addTodo({todo, desc}))
})

const AddTodoContainer = connect(null, mapDispatchToProps)(Addtodo)
export default AddTodoContainer


// type PropsType = {
//   callbacks: CallbacksType
// };

// const Addtodo = ({callbacks}: PropsType) => {
  
//   const navigate = useNavigate()

//   const [todo, setTodo] = useState<string>('');
//   const [desc, setDesc] = useState<string>('');
  
//   const addTodoHandler = () => {
//     if (todo.trim() === '' || desc.trim() === '') {
//       alert('반드시 여행지와 설명을 모두 입력해야 합니다.')
//       return
//     }
//     callbacks.addTodo(todo, desc)
//     navigate('/todos')
//   }


//   return (
//     <>
//       <div className="row">
//         <div className="col p-3">
//           <h2>여행지 추가</h2>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <div className="form-group">
//             <label htmlFor="todo">가고싶은 여행지 : </label>
//             <input type='text' className="form-control" id='todo' value={todo} onChange={e => setTodo(e.target.value)} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="desc">설명 : </label>
//             <textarea className="form-control" rows={3} id='desc' value={desc} onChange={e => setDesc(e.target.value)}></textarea>
//           </div>
//           <div className="form-group">
//             <button type="button" className="btn btn-primary m-1" onClick={addTodoHandler}>
//               추가하기
//             </button>
//             <button type="button" className="btn btn-primary m-1" onClick={() => navigate('/todos')}>
//               취소
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// };

// export default Addtodo;