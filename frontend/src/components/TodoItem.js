import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, toggleDone, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo(todo._id, { title, description });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(todo.title);
    setDescription(todo.description);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description (optional)"
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div className="todo-content">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleDone(todo._id)}
          />
          <div className="todo-text">
            <h3>{todo.title}</h3>
            {todo.description && <p>{todo.description}</p>}
          </div>
          <div className="todo-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;