import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from './components/Layout'
import {CallbacksType, StatesType} from './AppContainer'
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Addtodo from "./pages/Addtodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";
import About from "./pages/About";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='todos' element={<TodoList />} />
          <Route path='todos/add' element={<Addtodo />} />
          <Route path='todos/edit/:id' element={<EditTodo />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
};



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
//     </Router>
//   )
// };

export default App;
