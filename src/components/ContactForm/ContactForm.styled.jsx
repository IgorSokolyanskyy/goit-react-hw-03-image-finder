import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormList = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
`;

export const Input = styled(Field)`
  width: 240px;
  margin-top: 2px;
  outline: none;
  border: none;
  border-radius: 8px;
  height: 25px;
  appearance: none;
  background-color: ${props => props.theme.colors.buttonBg};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.white};
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: inset 1px 1px 2px #737171, inset -1px -1px 2px #737171;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  outline: none;
  border: none;
  width: 100px;
  height: 25px;
  border-radius: 8px;
  margin-bottom: 15px;
  cursor: pointer;
  &:focus,
  :hover {
    background-color: #23fe06e0;
    transform: scale(1.15);
  }
`;
