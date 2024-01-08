import React from 'react'
import { FaHome } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 

function Todolist() {
   
  const navigate = useNavigate();
    
  const navigateToMain = () => {
      navigate('/main'); 
    };

    const logout =() =>{
      Cookies.remove('token'); 
      navigate(`/login`)
    }



  return (
    <div>
      <div>
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid black' }}>
        <button onClick={navigateToMain}>
          <FaHome />
        </button>
        <button onClick={logout}>로그아웃</button>
      </header>
      </div>

    </div>
  )
}

export default Todolist