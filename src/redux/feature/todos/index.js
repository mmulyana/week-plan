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
        isComplete: false
      }

      state[id - 1].item.push(newData)
    },
    removeTodo: (state, action) => {
      const { id, index } = action.payload
      const updateData = state[id - 1].item.splice(index, 1)
      state = updateData
    },
    changeIsComplete: (state, action) => {
      const {id, index} = action.payload
      const isComplete = state[id - 1].item[index].isComplete 
      const updateData = state[id - 1].item[index].isComplete = !isComplete
      state = updateData
    }
  },
})

export const { addTodo, removeTodo, changeIsComplete } = todoSlice.actions

export default todoSlice.reducer
