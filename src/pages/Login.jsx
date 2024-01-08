import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 
import { useEffect } from 'react';

function Login() {
  const [useridpw, setUserIdPw] = useState({
    id: '',
    password: '',
  });

 

  const navigate = useNavigate();

  const navigateToJoin = () => {
    navigate('/join'); 
  };

  const loginButton = async () => {
    try {
      if (useridpw.id === '' || useridpw.password === '') {
        alert("아이디와 비밀번호를 입력해주세요");
        return;
      }
      const response = await api.post(`/login`, useridpw);
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
    <div>
      <div>
        <h1>로그인하기</h1>
      </div>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          loginButton();
        }}>
          <h2>아이디</h2>
          <input 
            type='text'
            value={useridpw.id}
            onChange={(e) => setUserIdPw({
              ...useridpw, 
              id: e.target.value
            })}
          />
          <h2>비밀번호</h2>
          <input 
            type='password'
            value={useridpw.password}
            onChange={(e) => setUserIdPw({
              ...useridpw,
              password: e.target.value 
            })}
          />
          <br />
          <button>로그인</button>
          <button onClick={navigateToJoin}>회원가입</button>
        </form>
      </div>
    </div>    
  )
}

export default Login;
