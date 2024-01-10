import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import { StyledTodoItem } from '../components/Styled-components';
import api from '../api/api'; 
import TodoModal from '../Modal/Modal';


function Todolist() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]); 
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await api.get('/todos'); 
        setTodos(response.data); 
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos(); 
  }, []); 

  const handleDelete = async (id) => {
    try {
      await api.delete(`/todos/${id}`); 
      const response = await api.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const openModal = (todo) => {
    setSelectedTodo(todo);
  };

  const closeModal = () => {
    setSelectedTodo(null);
  };

  return (
    <div style={{ marginTop: '90px' }}>
      {selectedTodo && <TodoModal todo={selectedTodo} onClose={closeModal} />}
      <div>
        {todos.map((todo) => (
          <StyledTodoItem key={todo.id} onClick={() => openModal(todo)}>
            <div >
              <h2>{todo.title}</h2>
              {todo.username}
            </div>
            <div>
              <FaTrash style={{ color: 'red' }} onClick={() => handleDelete(todo.id)} />
            </div>
          </StyledTodoItem>
        ))}
      </div>
    </div>
  );
}

export default Todolist;