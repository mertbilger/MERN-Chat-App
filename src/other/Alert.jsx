import styled from 'styled-components';

export const AlertWrapper = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
`;

const AlertDis = ({ children }) => {
  return <AlertWrapper>{children}</AlertWrapper>;
};

export default AlertDis;
 