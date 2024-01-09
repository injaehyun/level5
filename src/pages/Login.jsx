import React, { useState } from 'react';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 


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
          style={{
            width :"98%",
            height:"40px",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            margin:"5px",
            backgroundColor:"white",
            border:"lightgray solid 1px",
            borderRadius:"10px",
            }}
            type='text'
            value={useridpw.id}
            onChange={(e) => setUserIdPw({
              ...useridpw, 
              id: e.target.value
            })}
          />
          <h2>비밀번호</h2>
          <input style={{
            width :"98%",
            height:"40px",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            margin:"5px",
            backgroundColor:"white",
            border:"lightgray solid 1px",
            borderRadius:"10px",
            }}
            type='password'
            value={useridpw.password}
            onChange={(e) => setUserIdPw({
              ...useridpw,
              password: e.target.value 
            })}
          />
          <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignContent:"center"
          }}>
          <button style={{
            width :"98%",
            height:"40px",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            margin:"5px",
            backgroundColor:"#fe531f",
            border:"none",
            borderRadius:"10px",
            color:"white"
          }}>로그인</button>
          
          <button style={{
            width :"98%",
            height:"40px",
            display:"flex",
            justifyContent: "center",
            alignItems:"center",
            margin:"5px",
            backgroundColor:"#fe531f",
            border:"none",
            borderRadius:"10px",
            color:"white"
          }} onClick={navigateToJoin}>회원가입</button>
          </div>
        </form>
      </div>
    </div>    
  )
}

export default Login;
