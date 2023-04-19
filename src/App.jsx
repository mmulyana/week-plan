import { TodoWrapper } from './components'
import { useSelector } from 'react-redux'

function App() {
  const todos = useSelector((s) => s.todos)

  return (
    <div className='container mx-auto'>
      <TodoWrapper todos={todos} />
    </div>
  )
}

export default App
