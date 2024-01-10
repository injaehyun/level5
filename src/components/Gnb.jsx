import React from 'react'
import { FaHome } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; 

function Gnb() {

    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/main'); 
      };

    const logout =() =>{
        Cookies.remove('token'); 
        navigate(`/login`)
      }

  return (
    <div style={{
      justifyContent:'center',
      display:'flex',
      
      
    }}>
             
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        borderBottom: '1px solid black',
        padding: '10px'
        }}>
        <button style={{
          backgroundColor:'white',
          border :'none'
        }} onClick={navigateToMain}>
          <FaHome style={{
            width:'30px',
            height:'30px',
            
          }} />
        </button>
        <button style={{
          width:'100px',
          height:'50px',
          fontSize : '20px',
          backgroundColor:'white',
          border :'none'
          
        }} onClick={logout}>로그아웃</button>
      </header>
      </div>
  )
}

export default Gnb