import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const API_BASE_URL = 'http://localhost:5000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/todos`);
      setTodos(response.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch todos');
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/todos`, todo);
      setTodos([response.data, ...todos]);
    } catch (error) {
      setError('Failed to add todo');
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/todos/${id}`, updatedTodo);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (error) {
      setError('Failed to update todo');
    }
  };

  const toggleDone = async (id) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/todos/${id}/done`);
      setTodos(todos.map(todo => todo._id === id ? response.data : todo));
    } catch (error) {
      setError('Failed to toggle todo status');
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/todos/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      setError('Failed to delete todo');
    }
  };

  return (
    <div className="App">
      <h1>TODO App</h1>
      {error && <div className="error">{error}</div>}
      <TodoForm addTodo={addTodo} />
      {loading ? <div>Loading...</div> : <TodoList todos={todos} updateTodo={updateTodo} toggleDone={toggleDone} deleteTodo={deleteTodo} />}
    </div>
  );
}

export default App;