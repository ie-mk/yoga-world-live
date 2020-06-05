import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';
import media from '../media';

const StyledH3 = styled.h3`
  font-size: ${fontSizeMap.h3};
  z-index: 1;
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

const SectionTitle = ({ text }) => {
  return <StyledH3>{text}</StyledH3>;
};

export default withSpacing(SectionTitle);
