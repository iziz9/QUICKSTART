import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './components/Layout'
import {CallbacksType, StatesType} from './AppContainer'
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Addtodo from "./pages/Addtodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Loading from "../chapter11/components/Loading";
import UserInfo from "./pages/UserInfo";
import TodoList2 from "./pages/TodoList2";

const App = () => {
  return (
    <div style={{ padding: 10 }}>
      <React.Suspense fallback={<h2>User info로딩중</h2>}>
        <UserInfo />
      </React.Suspense>
      <hr />
      <React.Suspense fallback={<h2>TodoList 로딩중</h2>}>
        <TodoList2 />
      </React.Suspense>
    </div>
  )
}



// type PropsType = {
//   states: StatesType,
//   callbacks: CallbacksType
// };

// const App = ({states, callbacks}: PropsType) => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='todos' element={<TodoList states={states} callbacks={callbacks} />} />
//           <Route path='todos/add' element={<Addtodo callbacks={callbacks} />} />
//           <Route path='todos/edit/:id' element={<EditTodo states={states} callbacks={callbacks} />} />
//           <Route path='*' element={<NotFound />} />
//         </Route>
//       </Routes>
//       {states.isLoading ? <Loading /> : ''}
//     </Router>
//   )
// };

export default App;
