import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div``;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #dcdbdb;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #dcdbdb;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #f16b51;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  margin-top: 5px;
`;

export const BookingWraper = styled.div`
  display: flex;
`;
export const BookingImageWraper = styled.div`
  flex-basis: 50%;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
