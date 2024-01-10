import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { StyledInput, StyledButton } from '../components/Styled-components';
import useInput from '../components/Custom';

function Login() {
  const [userid, setuserId] = useInput('');
  const [password, setPassword] = useInput('');
  
  const navigate = useNavigate();

  const navigateToJoin = () => {
    navigate('/join');
  };

  const loginButton = async () => {
    try {
      if (userid === '' || password === '') {
        alert('아이디와 비밀번호를 입력해주세요');
        return;
      }
      const response = await api.post(`/login`, { userid, password });
      Cookies.set('token', response.data.token);
      navigate('/main');
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
        <h1>로그인하기</h1>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginButton();
          }}
        >
          <h2>아이디</h2>
          <StyledInput
            type="text"
            value={userid}
            onChange={setuserId}
          />
          <h2>비밀번호</h2>
          <StyledInput
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignContent: 'center',
            }}
          >
            <StyledButton>로그인</StyledButton>

            <StyledButton onClick={navigateToJoin}>회원가입</StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;