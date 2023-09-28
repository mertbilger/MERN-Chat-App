import styled from "styled-components";


export const NavbarContainer = styled.div`
  background-color: #334;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-radius: 15px;

  .logo {
    font-size: 24px;
  }

  .user {
    display: flex;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px;
    }

    span {
      font-weight: bold;
      font-size: 16px;
    }

    button {
      background-color: #fff;
      color: #333;
      border: none;
      padding: 5px 10px;
      border-radius: 5px;
      margin-left: 10px;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;

      &:hover {
        background-color: #555;
      }
    }
  }
`;