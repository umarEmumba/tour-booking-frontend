import styled from "styled-components";

export const PopupStyled = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const PopupImageStyled = styled.img`
  max-width: 80%;
  max-height: 80%;
`;
