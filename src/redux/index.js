import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './feature/todos'

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
})

export default store
