import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './feature'

const store = configureStore({
  reducer: rootReducer,
})

store.subscribe(() => {
  const todos = store.getState().todos
  localStorage.setItem('TODOS', JSON.stringify(todos))
})

export default store
