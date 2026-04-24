import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, toggleDone, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          updateTodo={updateTodo}
          toggleDone={toggleDone}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;