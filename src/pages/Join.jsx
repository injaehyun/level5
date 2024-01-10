import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import { StyledInput, StyledButton } from '../components/Styled-components';
import useInput from '../components/Custom';

function Join() {
  const [id, setId] = useInput('');
  const [password, setPassword] = useInput('');

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  const loginButton = async () => {
    try {
      if (id === '' || password === '') {
        alert("아이디와 비밀번호를 입력해주세요");
        return;
      }

      const response = await api.post(`/register`, { id, password });
      if (response.status === 201) {
        
        alert("회원가입에 성공했습니다.");
        navigateToLogin(); 
      }
    } catch (error) {
      if (error.response) {
        const statusCode = error.response.status;
        const errorMessage = error.response.data.message;

        if (statusCode === 401) {
          alert(errorMessage);
        }
      }
    }
  };

  
  

  return (
    <div style={{
      margin: '10px',
      marginTop: '100px'
    }}>
      <div>
        <h1>회원가입하기</h1>
      </div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          loginButton();
        }}>
          <h2>아이디</h2>
          <StyledInput
            type='text'
            value={id}
            onChange={setId} // useInput 훅에서 반환된 함수를 사용합니다.
          />
          <h2>비밀번호</h2>
          <StyledInput
            type='password'
            value={password}
            onChange={setPassword} // useInput 훅에서 반환된 함수를 사용합니다.
          />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
            <StyledButton>회원가입</StyledButton>
            <StyledButton onClick={navigateToLogin} >로그인하기</StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join;
