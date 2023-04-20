import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todos'

const rootReducer = combineReducers({
  todos: todoSlice,
})

export default rootReducer
