import React from 'react'

export default function TodoItem({data}) {
  return (
    <div className='min-h-20 bg-gray-100 rounded overflow-hidden'>
      <div className='w-full h-12 bg-white flex items-center justify-center'>
        {data.name}
      </div>
      {data.data.length > 0 && data.data.map((data, index) => <p key={index}>{data.name}</p>)}
    </div>
  )
}
