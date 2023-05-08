import styled from "styled-components";

interface ContainerStyledProps {
  subpage?: boolean;
}
export const ContainerStyled = styled.div<ContainerStyledProps>`
  margin: 0 auto 20px auto;
  height: 100%;
  padding: 0 20px;
  font-family: sans-serif;
  ${({ subpage }) => subpage && `margin-top : 100px;`}

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;
