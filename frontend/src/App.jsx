import { useState } from 'react'
import Header from './components/Header.jsx'
import ToDoList from './components/ToDoList.jsx'
import AddTodo from './components/AddTodo.jsx'


function App() {
  const [todos, setTodos] = useState([])

  return (
    <>
      <Header />
      <AddTodo todos={todos} setTodos={setTodos}  />
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
