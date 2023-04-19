import { createSlice } from '@reduxjs/toolkit'
import { initTodos } from '../../../utils/data'
import { nanoid } from 'nanoid'

const initialState = localStorage.getItem('TODOS')
  ? JSON.parse(localStorage.getItem('TODOS'))
  : initTodos

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { id, name } = action.payload

      const newData = {
        id: nanoid(),
        name,
      }

      state[id - 1].item.push(newData)
    },
    removeTodo: (state, action) => {
      const { id, index } = action.payload
      const updateData = state[id - 1].item.splice(index, 1)
      state = updateData
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
