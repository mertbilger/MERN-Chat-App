import styled from "styled-components";

export const Homes = styled.div`
`


export const HomeC = styled.div`
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(165deg, #ffde7a, #a7e9af);
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    height: 89vh;
  }
  .logo {
    
    font-weight: bold;
    font-size: 25px;
    
    @media (max-width: 768px) {
        font-size: 20px;
    }
  }
`;
export const Container = styled.div`
  border-radius: 10px;
  width: 65%;
  height: 80%;
  display: flex;
  overflow: hidden;

  .sidebar {
    flex: 1;
    background-color: #596275;

    .navbar {
      display: flex;
      align-items: center;
      background-color: #303952;
      height: 50px;
      padding: 10px;
      justify-content: space-between;
      color: white;

      .logo {
        font-weight: bold;
        font-size: 25px;

        @media (max-width: 768px) {
          font-size: 20px;
        }
      }

      .user {
        display: flex;
        gap: 10px;

        img {
          background-color: #f5ebe0;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          object-fit: cover;
         @media (max-width: 768px) {
         
        }
        }

        button {
          background-color: #9e2a2b;
          color: #f5ebe0;
          font-size: smaller;
          border: none;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 768px) {
 
    width: 100%;
    margin-left:32px 
  }
`; 
