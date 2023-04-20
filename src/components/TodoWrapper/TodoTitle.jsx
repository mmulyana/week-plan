import { useState } from 'react'
import {
  changeIsComplete,
  changeTodo,
  removeTodo,
} from '../../redux/feature/todos'
import { useDispatch } from 'react-redux'
import { BsCheckLg, BsX } from 'react-icons/bs'

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
    <div className='py-2 bg-white rounded px-2 mt-1 h-fit overflow-hidden relative todoTitle'>
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
                'w-4 h-4 rounded-[4px] border flex items-center text-sm justify-center text-white cursor-pointer',
                data.isComplete
                  ? 'bg-sky-800 border-sky-800'
                  : 'bg-transparent border-gray-600',
              ].join(' ')}
              onClick={() => handleIsComplete(data.id)}
            >
              {!!data.isComplete && <BsCheckLg />}
            </div>
            <p onClick={() => setIsEdit(true)}>{data.name}</p>
          </div>

          <div className='todoRemove h-full flex items-center'>
            <button onClick={() => handleDelete(data.id)} className='text-gray-300 hover:text-red-500'>
              <BsX />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
