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
        isComplete: false,
      }

      state[id].item.push(newData)
    },
    removeTodo: (state, action) => {
      const { id } = action.payload
      const newData = state.map((data) => {
        data.item.forEach((item, index) => {
          if (item.id === id) {
            data.item.splice(index, 1)
          }
        })
      })
    },
    changeIsComplete: (state, action) => {
      const { id } = action.payload
      const newData = state.map((data) => {
        data.item.forEach((item) => {
          if (item.id === id) {
            item.isComplete = !item.isComplete
          }
        })
      })
    },
    changeTodo: (state, action) => {
      const { id, name } = action.payload
      const newData = state.map((data) => {
        data.item.forEach((item) => {
          if (item.id === id) {
            item.name = name
          }
        })
      })

      // console.log(newData)
    },
  },
})

export const { addTodo, removeTodo, changeIsComplete, changeTodo } =
  todoSlice.actions

export default todoSlice.reducer
