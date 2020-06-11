import React from 'react';
import styled from 'styled-components';
import { fontSizeMap, colors } from '../../../constants/styles';
import media from '../media';
import getMedia from '../../../utils/media';

const StyledH4 = styled.h4`
  font-size: ${fontSizeMap.textMobile};
  font-weight: 400;
  color: ${({ color }) => (color ? color : colors.text.primary)};
  margin: ${({ margin }) => margin || ''};
  ${media.aboveTablet`
    font-size: ${fontSizeMap.h4};
  `};

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')};
`;

const BodyHeader = ({ text, margin, color }) => {
  return (
    <StyledH4 color={color} margin={margin}>
      {text}
    </StyledH4>
  );
};

export default BodyHeader;
