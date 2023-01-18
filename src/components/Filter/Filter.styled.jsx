import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: content;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  margin-top: 6px;
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
