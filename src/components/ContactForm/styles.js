import styled from "styled-components";
import { Container, Form, Button } from "react-bootstrap";

export const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  margin-right: 10px;
  width: 70px;
  text-align: right;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`;

export const ContactWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 60px 0;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Feedback = styled(Form.Control.Feedback)`
  font-size: 0.8rem;
  margin-top: 5px;
`;

export const StyledFormControl = styled(Form.Control)`
  font-size: 1rem;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #f7f7f7;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    box-shadow: 0 0 2px #007bff;
  }

  &:disabled {
    background-color: #eee;
  }
`;

export const StyledTextArea = styled(StyledFormControl)`
  resize: none;
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 15px;
  background: #f7f7f7;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  border-radius: 5px;
  outline: none;

  button:hover {
    background: #ddd;
    cursor: pointer;
  }

  button {
    width: 100%;
  }
`;
