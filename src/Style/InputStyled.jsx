import styled from "styled-components";

export const InputContainer = styled.div`
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 20px;
  @media (max-width: 768px) {
    height: 35px;
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    color: #000;
    font-size: 18px;
  }
  &::placeholder {
    color: lightgray;
  }
`;
export const Send = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 24px;
    cursor: pointer;
  }

  button {
    border: none;
    padding: 10px 15px;
    color: white;
   background-color: #9e2a2b;
   cursor: pointer;
  }
`;
