import React from 'react';
import styled from 'styled-components';
import { colors, marginMap } from '../../../constants/styles';
import { lightenDarkenColor } from '../../../utils/colors';

const sizePaddingMap = {
  sm: 10,
  lg: 20,
};

const colorMap = {
  primary: colors.button.primary,
  secondary: colors.button.secondary,
  warning: colors.button.warning,
  danger: 'red',
};

const ButtonWrapper = styled.button`
  margin: ${marginMap.md} 0;
  padding: ${({ size }) =>
    sizePaddingMap[size] ? sizePaddingMap[size] : 10}px;
  background-color: ${({ type }) =>
    colorMap[type] ? colorMap[type] : 'white'};
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  z-index: 1;
  &:hover {
    background-color: ${({ type }) =>
      colorMap[type] ? lightenDarkenColor(colorMap[type], -30) : 'white'};
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
