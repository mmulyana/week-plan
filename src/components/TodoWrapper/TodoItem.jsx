import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../../redux/feature/todos'

export default function TodoItem({ data }) {
  const inputVal = useRef()
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    const name = inputVal?.current.value
    inputVal.current.value = null
    const payload = {
      id: data.id,
      name,
    }
    dispatch(addTodo(payload))
  }

  function handleDelete(index) {
    const payload = {
      id: data.id,
      index,
    }
    dispatch(removeTodo(payload))
  }

  return (
    <div className='min-h-20 bg-gray-100 rounded overflow-hidden'>
      <div className='w-full h-12 bg-white flex items-center justify-center'>
        {data.name}
      </div>
      {data.item.length > 0 &&
        data.item.map((dataItem, index) => (
          <p onClick={() => handleDelete(index)} key={index}>
            {dataItem.name}
          </p>
        ))}
      <form onSubmit={handleSubmit}>
        <input type='text' ref={inputVal} />
        <button hidden type='submit' />
      </form>
    </div>
  )
}
