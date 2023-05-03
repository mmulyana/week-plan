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
    <div className='py-3 px-1 rounded mt-1 h-fit overflow-hidden relative todoTitle'>
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
                'w-[18px] h-[18px] cursor-pointer rounded border-2 border-[#33322E] flex items-center justify-center',
                data.isComplete
                  ? 'bg-[#D0F4F0]'
                  : 'bg-transparent border-gray-600',
              ].join(' ')}
              onClick={() => handleIsComplete(data.id)}
            >
              {!!data.isComplete && (
                <span className='text-xl'>
                  <BsCheck />
                </span>
              )}
            </div>
            <p
              onClick={() => setIsEdit(true)}
              className={[
                'capitalize text-base font-semibold',
                data.isComplete ? 'text-slate-600 line-through' : 'text-slate-900',
              ].join(' ')}
            >
              {data.name}
            </p>
          </div>

          <div className='todoRemove h-full flex items-center'>
            <button
              onClick={() => handleDelete(data.id)}
              className='text-slate-400 hover:text-red-500'
            >
              <BsX />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
