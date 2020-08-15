import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';
import media from '../media';
import getMedia from '../../../utils/media';

const StyledH5 = styled.h5`
  font-size: ${fontSizeMap.text};
  width: ${({ width }) => width || ''};
  margin: ${({ margin }) => margin || ''};
  font-weight: ${({ fontWeight }) => fontWeight || ''};

  ${media.aboveTablet`
    font-size: ${fontSizeMap.h5};

  `};
  ${media.belowTablet`
     font-size: ${fontSizeMap.text};


  `}

  ${({ mediaConfig }) => (mediaConfig ? getMedia(mediaConfig) : '')};
`;

const CardTitle = ({ text, fontWeight, width }) => {
  return (
    <StyledH5 margin="0" width={width} fontWeight={fontWeight}>
      {text}
    </StyledH5>
  );
};

export default withSpacing(CardTitle);
