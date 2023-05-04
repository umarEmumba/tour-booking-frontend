import styled from "styled-components";

interface DescriptionStyledProps {
  nowrap?: boolean;
}

export const DescriptionStyled = styled.p<DescriptionStyledProps>`
  text-align: center;
  ${({ nowrap }) => nowrap && `flex-wrap: nowrap`}
`;
