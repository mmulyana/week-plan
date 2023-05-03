import TodoItem from './TodoItem'

export default function TodoWrapper({ todos }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12'>
      {todos.map((data, index) => (
        <TodoItem key={index} data={data} />
      ))}
    </div>
  )
}
