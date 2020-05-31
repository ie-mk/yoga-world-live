import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import media from '../media';

const StyledH2 = styled.h2`
  font-size: ${fontSizeMap.h4};

  ${media.aboveTablet`
    font-size: ${fontSizeMap.h2};
  `}
`;

const HeroTitle = ({ text }) => {
  return <StyledH2>{text}</StyledH2>;
};

export default HeroTitle;
