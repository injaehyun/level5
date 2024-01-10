import React from 'react';
import { FaHome } from 'react-icons/fa'; 
import { IoIosArrowForward } from 'react-icons/io'; 
import { useNavigate } from 'react-router-dom';
import { StyledActionItem } from '../components/Styled-components';




function Main() {
    
    const navigate = useNavigate();
    
  
    return (
    <>
    
      
      <div style={{ 
        marginTop: '90px',
        
        
       }}>
         <h1 style={{
          paddingLeft:'10px',
          margi:'10px'
        }}>무엇을 할까요?</h1>
        
        </div>
        
        <StyledActionItem onClick={() => navigate('/main/work')}
        >할일 기록하기
          <IoIosArrowForward />
        </StyledActionItem>
        
        <StyledActionItem 
        onClick={() => navigate('/main/todolist')}
        >ToDo List
          <IoIosArrowForward />
        </StyledActionItem>
      
        </>
  );
}

export default Main;
