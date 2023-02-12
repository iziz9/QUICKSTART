import axios from "axios";
import React from "react";


type TodoType = {id:number, todo: string, done: boolean, desc: string}
const listUrl = '/api/todolist_long/gdhong'
const todoUrlPrefix = '/api/todolist_long/gdhong/'

// 4건 목록 조회 후 첫번째 할 일만 한번 더 조회
// then으로 체이닝
// const requestAPI = () => {
//   let todoList: Array<TodoType> = []
//   axios.get(listUrl).then(response => {
//     todoList = response.data
//     console.log('#TodoList : ', todoList)
//     return todoList[0].id
//   })
//     .then(id => {
//     return axios.get(todoUrlPrefix+id)
//     })
//     .then(response => {
//       console.log('## 첫 번째 Todo : ', response.data)
//     })
//     .then(id => {
//       axios.get(todoUrlPrefix + id).then(response => {
//         console.log('## 두 번째 Todo : ', response.data)
//       })
//     })
// }

// const requestAPI = async () => {
//   let todo: TodoType; // 타입만 설정하고 값은 나중에 할당할 거라서 const쓸 수 없음
//   let todoList: Array<TodoType>
  
//   let response = await axios.get(listUrl)
//   todoList = response.data
//   console.log('#TodoList : ', todoList)
  
//   response = await axios.get(todoUrlPrefix + todoList[0].id)
//   console.log('## 첫 번째 Todo : ', response.data)
  
//   response = await axios.get(todoUrlPrefix + todoList[1].id)
//   console.log('## 두 번째 Todo : ', response.data)
// }

// async/await 반복문 사용
// const requestAPI = async () => {
//   let todoList: Array<TodoType>
//   let response = await axios.get(listUrl)
//   todoList = response.data
//   console.log('#todoList : ', todoList)
//   for (let i = 0; i < todoList.length; i++) {
//     response = await axios.get(todoUrlPrefix + todoList[i].id)
//     console.log(`# ${i+1} 번째 TODO : `, response.data)
//   }
// }

// const requestAPI = async () => {
//   const url = '/api/todolist/gdhong'
//   const response = await axios.get(url)

// }

// const requestAPI = async () => {
//   const url = '/api/todolist_long/gdhong'
//   let data = { todo: '여행가기', desc: '빨리 가고싶다' }
//   const res = await axios.post(url, data)
//   console.log(res.data)
// }

const requestAPI = async () => {
  const url = '/api/todolist_long/gdhong'
  axios.get(url, { timeout: 900 })
    .then(res => {
    console.log(res)
    })
    .catch(err => {
      if (err instanceof Error) {
      console.log(err.message)
      } else {
        console.log(err)
    }
  })
}

requestAPI()

type Props = {}

const App = (props: Props) => {
  return <h2>Console.log를 확인하세요</h2>
}

export default App