import { TodoWrapper } from './components'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar'

function App() {
  const todos = useSelector((s) => s.todos)
  return (
    <>
      <Navbar />
      <div className='container mx-auto mt-16 px-4'>
        <TodoWrapper todos={todos} />
      </div>
    </>
  )
}

export default App
