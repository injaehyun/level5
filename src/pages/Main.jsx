import React from 'react';
import { FaHome } from 'react-icons/fa'; 
import { IoIosArrowForward } from 'react-icons/io'; 
import { useNavigate } from 'react-router-dom';




function Main() {
    
    const navigate = useNavigate();
    
  
    return (
    <>
    
      
      <div style={{ 
        marginTop: '50px',
       }}>
         <h1 style={{paddingLeft:'10px'}}>무엇을 할까요?</h1>
        <hr />
        </div>
        
        <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '30px',
        borderRadius: '10px',
        border: '1px solid lightgrey',
        width: '95%',
        height: '100px',
        margin: '20px',
        paddingLeft: '10px',
        }}
        onClick={() => navigate('/main/work')}
        >할일 기록하기
          <IoIosArrowForward />
        </div>
        
        <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '30px',
        borderRadius: '10px',
        border: '1px solid lightgrey',
        width: '95%',
        height: '100px',
        margin: '20px',
        paddingLeft: '10px',
        }}
        onClick={() => navigate('/main/todolist')}
        >ToDo List
          <IoIosArrowForward />
        </div>
      
        </>
  );
}

export default Main;
