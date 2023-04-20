import TodoTitle from './TodoTitle'
import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/feature/todos'
import { BsPlus } from 'react-icons/bs'

export default function TodoItem({ data }) {
  const inputVal = useRef()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <div className='min-h-20'>
      <div className='w-full h-12 flex items-center justify-between px-2'>
        <p className='text-slate-700'>{data.name}</p>
        <div className='flex items-center gap-2'>
          <button className='text-slate-400 hover:text-slate-800 hover:bg-gray-100 h-5 w-5 flex items-center justify-center rounded' onClick={() => setIsOpen(!isOpen)}>
            <BsPlus />
          </button>
        </div>
      </div>

      <div className='mt-1 px-2'>
        {data.item.length > 0 &&
          data.item.map((dataItem, index) => (
            <TodoTitle key={index} data={dataItem} />
          ))}
      </div>

      {!!isOpen && (
        <div className='w-full px-2 mt-2'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              ref={inputVal}
              autoFocus
              className='w-full py-1 px-2'
              onBlur={() => setIsOpen(false)}
            />
            <button hidden type='submit' />
          </form>
        </div>
      )}
    </div>
  )
}
