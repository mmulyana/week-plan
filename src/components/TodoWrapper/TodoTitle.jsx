import { useState } from 'react'
import {
  changeIsComplete,
  changeTodo,
  removeTodo,
} from '../../redux/feature/todos'
import { useDispatch } from 'react-redux'
import { BsCheck, BsX } from 'react-icons/bs'

export default function TodoTitle({ data }) {
  const [isEdit, setIsEdit] = useState(false)
  const [text, setText] = useState(data.name)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(changeTodo({ id: data.id, name: text }))
    setIsEdit(false)
  }

  function handleBlur() {
    setIsEdit(false)
    dispatch(changeTodo({ id: data.id, name: text }))
  }

  function handleDelete(id) {
    dispatch(removeTodo({ id }))
  }

  function handleIsComplete(id) {
    dispatch(changeIsComplete({ id }))
  }

  return (
    <div className='p-3 bg-white rounded mt-1 h-fit overflow-hidden relative todoTitle'>
      {isEdit ? (
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            autoFocus
            onBlur={handleBlur}
          />
          <button type='submit' hidden />
        </form>
      ) : (
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <div
              className={[
                'w-[18px] h-[18px] rounded outline hover:outline-blue-500/50 border text-xl flex items-center justify-center text-white cursor-pointer hover:border-blue-600',
                data.isComplete
                  ? 'bg-blue-700 border-blue-700'
                  : 'bg-transparent border-gray-600',
              ].join(' ')}
              onClick={() => handleIsComplete(data.id)}
            >
              {!!data.isComplete && <BsCheck />}
            </div>
            <p
              onClick={() => setIsEdit(true)}
              className={[
                'capitalize text-base',
                data.isComplete ? 'line-through text-slate-300' : 'text-slate-700',
              ].join(' ')}
            >
              {data.name}
            </p>
          </div>

          <div className='todoRemove h-full flex items-center'>
            <button
              onClick={() => handleDelete(data.id)}
              className='text-gray-300 hover:text-red-500'
            >
              <BsX />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
