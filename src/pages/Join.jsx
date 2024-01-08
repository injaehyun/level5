import React, { useState } from 'react'
import axios from 'axios'
import api from '../api/api'
import { useNavigate } from 'react-router-dom'



function Join() {
const [useridpw, setUserIdPw] = useState({
  id :'',
  password :'',
})

const navigate = useNavigate();

const navigateToLogin = () => {
  navigate('/login'); 
};


const loginButton = async () => {
  try {
    if (useridpw.id === '' || useridpw.password === '') {
      alert("아이디와 비밀번호를 입력해주세요");
      return; 
    }

    const response = await api.post(`/register`, useridpw);
    console.log(response);

    
    
  } catch (error) {
    if (error.response) {
      // 서버 응답에 따른 다른 경고 메시지 처리
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message; // 서버에서 전달되는 에러 메시지, 서버 응답에 따라 변경 가능

      if (statusCode === 401) {
        alert(errorMessage); // 서버에서 전달된 에러 메시지를 표시
      }}}};

  return (
    <div>
    <div>
        <h1>회원가입하기</h1>
    </div>
    <div>
        <form onSubmit={(e) =>{
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
        <button>회원가입</button>
        <button onClick={navigateToLogin} >로그인하기</button>
        </form>
        
    </div>
    </div>    
  )
}

export default Join