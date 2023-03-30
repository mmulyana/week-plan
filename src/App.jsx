import { useState } from 'react'
import { TodoWrapper } from './components'
import { initTodos } from './utils/data'

function App() {
  const [todos, setTodos] = useState(initTodos)

  return (
    <div>
      <TodoWrapper todos={todos} />
    </div>
  )
}

export default App
