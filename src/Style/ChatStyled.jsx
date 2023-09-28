import styled from "styled-components";

export const ChatContainer = styled.div`
  flex: 2;
`;

export const ChatInfo = styled.div`
  height: 55px;
  background-color: #334;
  display: flex;
  align-items: center;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;  

  span {
     
    margin-left : 70px;
    font-size: 20px;
    @media (max-width: 768px) {
       margin-left: 100px;
    }
   
  }
`;
