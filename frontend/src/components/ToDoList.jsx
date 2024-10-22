import React, { useState } from 'react';

function ToDoList({ todos, setTodos }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditTitle(todos[index].title);
    setEditDescription(todos[index].description);
  };

  const handleSave = (index) => {
    const newTodos = [...todos];
    newTodos[index] = {
      ...newTodos[index],
      title: editTitle,
      description: editDescription
    };
    setTodos(newTodos);
    setEditIndex(-1);
  };

  const handleCancel = () => {
    setEditIndex(-1);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <br />
                <br />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <br />
                <br />
                <button onClick={() => handleSave(index)}>Save</button>
                <br />
                <button onClick={handleCancel}>Cancel</button>
              </>
            ) : (
              <>
                <h3>Title - {todo.title}</h3>
                  <h5>key - { index + 10561 }</h5>
                <p>Description - {todo.description}</p>
                <p>Status - {todo.completed ? 'completed ✅' : 'pending ❌'}</p>
                <button
                  onClick={() => {
                    const newTodos = [...todos];
                    newTodos[index].completed = !newTodos[index].completed;
                    setTodos(newTodos);
                  }}
                >
                  mark as {todo.completed ? 'pending' : 'completed'}
                </button>
                <br />
                <button onClick={() => handleEdit(index)}>Edit</button>
                <br />
                <button
                  onClick={() => {
                    const newTodos = [...todos];
                    newTodos.splice(index, 1);
                    setTodos(newTodos);
                  }}
                >
                  Delete todo
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
