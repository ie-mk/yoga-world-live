import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';

const StyledH3 = styled.h3`
  font-size: ${fontSizeMap.h3};
`;

const SectionTitle = ({ text }) => {
  return <StyledH3>{text}</StyledH3>;
};

export default SectionTitle;
