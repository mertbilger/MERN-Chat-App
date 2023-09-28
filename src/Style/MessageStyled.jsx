import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  &.owner{
    flex-direction: row-reverse;

    .messageContent{
      align-items:flex-end ;
      p{
        background-color:#9e2a2b ;
        color:white;
        border-radius:10px 0px 10px 10px ;
      }
    }
  }

  @media (max-width: 758px) {
    /* Ekran genişliği 758px'den küçük olduğunda uygulamak istediğiniz stilleri buraya ekleyin */
    flex-direction: column;
    gap: 10px;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
  font-weight: 300;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    object-fit: cover;
  }

  @media (max-width: 758px) {
    /* Ekran genişliği 758px'den küçük olduğunda uygulamak istediğiniz stilleri buraya ekleyin */
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const MessageContent = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    background-color: white;
    padding: 10px 20px;
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
  }
  
   img {
     width: 250px;
     height: 250px;
   }

   @media (max-width: 758px) {
     /* Ekran genişliği 758px'den küçük olduğunda uygulamak istediğiniz stilleri buraya ekleyin */
     img {
       width: auto; /* Resmin orijinal genişliğini korur */
       height: auto; /* Resmin orijinal yüksekliğini korur */
       max-width:100%; /* Resmin genişliği, ebeveyninin genişliğini aşmayacaktır */
     }
   }
`;
