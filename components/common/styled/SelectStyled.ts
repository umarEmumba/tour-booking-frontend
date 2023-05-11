import styled from "styled-components";

const SelectStyled = styled.select`
  padding: 0.5em;
  border: none;
  border-radius: 3px;
  color: #555;
  background-color: #fff;
  font-size: 1em;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.293 12.293l-14-14A1 1 0 0 0 16 0H2C.897 0 0 .897 0 2v14a1 1 0 0 0 1.293.293l14-14a1 1 0 0 1 1.414 0l14 14a1 1 0 0 0 1.293-.293c.39-.39.39-1.024 0-1.414z' fill='%23555'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;

  @media only screen and (max-width: 480px) {
    font-size: 0.9em;
    max-width: 168px;
    background-position: right 0.5em top 50%, 0 0;
  }
`;
export default SelectStyled;
