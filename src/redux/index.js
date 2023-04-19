import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './feature/todos'

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
})

store.subscribe(() => {
  const todos = store.getState().todos
  localStorage.setItem('TODOS', JSON.stringify(todos))
})

export default store
