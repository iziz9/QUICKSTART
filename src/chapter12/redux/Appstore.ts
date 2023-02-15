import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoReducer";

// reducer 옵션으로 TodoReducer 지정하여 스토어 객체 생성,
// 사용을 위해 main에서 Provider지정
const AppStore = configureStore({ reducer: TodoReducer })

export default AppStore