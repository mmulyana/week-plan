import { createSlice } from '@reduxjs/toolkit'
import { initTodos } from '../../../utils/data'
import { nanoid } from 'nanoid'

const initialState = initTodos

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
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
