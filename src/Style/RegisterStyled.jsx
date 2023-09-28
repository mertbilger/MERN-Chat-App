import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  height: 95vh;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #ff6347, #4169e1);
  @media (max-width: 768px) {
    height: 95vh;
  }

  p {
    color: #323031;
    font-size: 15px;
    margin-top: 5px;
    font-weight: bold;
  }
`;

export const FormWrapper = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  font-family: "Helvetica Neue", sans-serif;
  padding: 20px 60px;
  border-radius: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  min-width: 400px;
  text-align: center;

  input {
    padding: 15px;
    border: none;
    width: 98%;
    border-bottom: 3px solid #334;
    font-size: 16px;
    border-radius: 5px;
    margin-bottom: 15px;
    transition: border-color 0.3s;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      border-color: #f4a261;
    }
  }

  button {
    width: 100%;
    padding: 10px 0;
    margin-top: 20px;
    background: #323232;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
  }

  input[type="file"] {
    display: none;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;
    min-width: 100%;
    width: 100%;

    input {
      width: 80%;
    }

    button {
      width: 70%;
    }
  }
`;

export const LogoSpan = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 36px;
  @media (max-width: 768px) {
    margin-top: 5px;
    font-size: 30px;
  }
`;

export const TitleSpan = styled.span`
  color: #333;
  margin-top: 20px;
  font-size: 28px;
  margin-bottom: 20px;
`;
