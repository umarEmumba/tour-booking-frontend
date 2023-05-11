import styled, { keyframes } from "styled-components";

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;
export const LoaderStyled = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #f16b51;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;

export const LoaderWraper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20%;
`;
