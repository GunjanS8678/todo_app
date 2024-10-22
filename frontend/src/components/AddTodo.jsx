import { useState } from "react"

function AddTodo({todos,setTodos}){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }
  
  function addTodoHandler(){
    const newTodo = {
      title: title,
      description: description,
      completed: false
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setDescription('')
  }
  return (
    <div>
    <label htmlFor="title">Enter Title : </label>
      <input type="text" placeholder="enter title" id="title" value={title} onChange={handleTitleChange}/>
      <br />
      <br />
      <label htmlFor="description">Enter Description : </label>
      <input type="text" placeholder="enter description" id="description" value={description} onChange={handleDescriptionChange}/>
      <br />
      <br />
      <button onClick={addTodoHandler}>Add Todo</button>
    </div>
  )
}



export default AddTodo