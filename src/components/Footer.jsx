
import styled from 'styled-components'

const StyledFooter = styled.div`
  display: flex;
  bottom: 0;
  width: 100%;
  color: #000;
  text-align: center;
  font-size: 15px;
  width:100%;
 justify-content:center;
  font-weight: bold;
`;

const Footer = () => {
    return (
        <StyledFooter><p>© 2023 - Mert Bilger - Tüm Hakları Saklıdır</p></StyledFooter>
    )
}

export default Footer