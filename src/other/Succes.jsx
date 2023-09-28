import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';


export const SuccesWrapper = styled.div`
  position: absolute;
  width: 40%;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: -800px;
  font-size: 14px;
  text-align: center;
  @media (max-width: 768px) {
   width: 80%;

  }
`;

export default function Succes({ children }) {
  return (
    <SuccesWrapper>
      <Stack spacing={2}>
        <Alert severity="success" >
          <AlertTitle>Tamamlandı</AlertTitle>
          {children} <strong> Yönlendiriliyorsunuz...</strong>
        </Alert>
      </Stack>
    </SuccesWrapper>
  );
}
