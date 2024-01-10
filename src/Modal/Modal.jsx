
import React from 'react';
import { StyledButton } from '../components/Styled-components';


function TodoModal({ todo, onClose }) {
  if (!todo) return null;

  return (
    <div style={{
        width: '50%',
        height: '40%',
        position: 'fixed',
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        zIndex: 1000,
        border: '1px solid lightgray',
        boxSizing: 'border-box',
        display: 'flex',          
        flexDirection: 'column',  
        justifyContent: 'space-around', 
        boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'
      }}>
      <h2>{todo.title}</h2>
      <p>작성자: {todo.username}</p>
      <p>내용: {todo.body}</p>
      <StyledButton onClick={onClose}>닫기</StyledButton>
    </div>
  );
}

export default TodoModal