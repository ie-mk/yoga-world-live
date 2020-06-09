import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';
import media from '../media';

const StyledH3 = styled.h3`
  font-size: ${fontSizeMap.text};
  width: ${({ width }) => width || ''};
  margin: ${({ margin }) => margin || ''};
  font-weight: ${({ fontWeight }) => fontWeight || ''};

  ${media.aboveTablet`
    font-size: ${fontSizeMap.h3s};
  `};
`;

const CardTitle = ({ text, margin, fontWeight, width }) => {
  return (
    <StyledH3 margin={margin} width={width} fontWeight={fontWeight}>
      {text}
    </StyledH3>
  );
};

export default withSpacing(CardTitle);
