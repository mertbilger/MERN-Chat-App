import styled from "styled-components";

export const SearchContainer = styled.div`
 border-bottom: 1px solid gray;

.searchForm{
  padding: 10px;
  input{
    background-color: transparent;
    border:none;
    color:white;
    outline: none;

    &::placeholder{
      color:lightgray;
    }
  }
}
`;
export const UserChat = styled.div`
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          color:white;
          cursor: pointer;

          &:hover{
            background-color: #303952;
          }

          img{
            width: 50px;
            height: 50px;
            border-radius: 50px;
            object-fit: cover;
          }

          .userChatInfo{
            span{
              font-size: larger;
              font-weight: 500;
            }
            p{
              font-size: smaller;
              color:lightgray;
            }
          }
`;