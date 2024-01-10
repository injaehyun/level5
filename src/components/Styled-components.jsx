import styled from 'styled-components';


// Styled Input component
export const StyledInput = styled.input`
  width: 98%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: white;
  border: lightgray solid 1px;
  border-radius: 10px;
`;

// Styled Button component
export const StyledButton = styled.button`
  width: 98%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background-color: #fe531f;
  border: none;
  border-radius: 10px;
  color: white;
  &:disabled {
    background-color: #ccc; 
    color: #666; 
    cursor: not-allowed; }
`;
//main 페이지 메뉴 스타일 
export const StyledActionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  width: 95%;
  height: 100px;
  margin: 20px;
  padding-left: 10px;
  cursor: pointer; // 클릭 가능한 커서 스타일 추가
`;
//main 페이지 메뉴 스타일 
export const StyledTodoItem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: flex-start;
  border-radius: 10px;
  border: 1px solid lightgrey;
  width: 95%;
  height: 100px;
  margin: 20px;
  padding: 20px;
  cursor: pointer; // 클릭 가능한 커서 스타일 추가
`;