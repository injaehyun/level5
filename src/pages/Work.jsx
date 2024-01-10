import React from 'react'
import useInput from '../components/Custom';
import { StyledInput,StyledButton } from '../components/Styled-components';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

function Work() {
  
  const navigate = useNavigate();
  
  const [username, handleAuthorChange] = useInput('');
  const [title, handleTitleChange] = useInput('');
  const [body, handleContentChange] = useInput('');

  // 폼 제출 함수
  const addWork = async () => {
    try {
      if (username === '' || title === '' || body === '' ) {
        alert('내용을 입력해주세요');
        return;
      }
      const response = await api.post(`/todos`, { username, title, body });
      
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

  const isButtonEnabled = username !== '' && title !== '' && body !== '';

  return (
    <div style={{
      marginTop:'90px',
      marginLeft:'20px',
      marginRight:'20px',
      display:'flex',
      flexDirection:'column'
    }}>
    <form onSubmit={addWork}>
      <div>
        <h3>작성자</h3>
        <StyledInput 
        type="text" 
        value={username} 
        onChange={handleAuthorChange} 
        placeholder='작성자의 이름을 입력해 주세요(5자 이내)'
        maxLength={5} />
      </div>
      <div>
        <h3>제목</h3>
        <StyledInput 
        type="text" 
        value={title} 
        onChange={handleTitleChange} 
        placeholder='제목을 입력해주세요(50자 이내)'
        maxLength={50} />
      </div>
      <div>
        <h3>내용</h3>
        <textarea 
        name="body" 
        rows="15" 
        maxLength={200} 
        placeholder="내용을 입력해주세요. (200자 이내)"
        style={{
          width:'98%',
          margin:'5px',
          backgroundColor:'white',
          border : 'lightgray solid 1px',
          borderRadius: '10px',
          fontFamily: 'Arial'
        }}
        value={body} 
        onChange={handleContentChange} 
        />
      </div>
      <StyledButton disabled={!isButtonEnabled}>추가하기</StyledButton>
    </form>
    </div>
  );
}

export default Work