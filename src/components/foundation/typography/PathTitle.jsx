import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';

const StyledH4 = styled.h4`
  font-size: ${fontSizeMap.h4};
`;

const PathTitle = ({ text }) => {
  return <StyledH4>{text}</StyledH4>;
};

export default PathTitle;
