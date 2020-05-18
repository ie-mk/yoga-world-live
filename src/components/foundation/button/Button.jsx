import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../constants/styles';
import { lightenDarkenColor } from '../../../utils/colors';

const sizePaddingMap = {
  sm: '10px',
  lg: '20px 70px',
};

const fontSizeMap = {
  sm: '16px',
  lg: '20px',
};

const backGroundMap = {
  primary:
    'transparent linear-gradient(90deg, #2385D9 0%, #0EC9B0 100%) 0% 0% no-repeat padding-box;',
};

const colorMap = {
  primary: colors.button.secondary,
  warning: colors.button.warning,
  danger: 'red',
};

const borderMap = {
  secondary: '2px solid white',
};

const ButtonWrapper = styled.button`
  margin: 0 50px;
  padding: ${({ size }) =>
    sizePaddingMap[size] ? sizePaddingMap[size] : '10px'};
  background: ${({ type }) =>
    backGroundMap[type] ? backGroundMap[type] : 'transparent'};
  border-radius: 2px;
  border: ${({ type }) => (borderMap[type] ? borderMap[type] : 'none')};
  cursor: pointer;
  outline: none;
  color: ${({ type }) => (colorMap[type] ? colorMap[type] : 'white')};
  font-weight: bold;
  font-size: ${({ size }) => (fontSizeMap[size] ? fontSizeMap[size] : '12px')};
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
