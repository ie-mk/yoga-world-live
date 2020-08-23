import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../withSpacing';
import media from '../media';

const StyledH3 = styled.h3`
  color: ${colors.text.secondary};
  font-size: ${fontSizeMap.h3};
  z-index: 1;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  margin: ${({ noMargin }) => (noMargin ? 0 : '')};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
    margin: ${({ mobileMargin }) => mobileMargin || ''};
  `}
`;

const SectionTitle = ({ text, textAlign, noMargin }) => {
  return (
    <StyledH3 noMargin={noMargin} textAlign={textAlign}>
      {text}
    </StyledH3>
  );
};

export default withSpacing(SectionTitle);
