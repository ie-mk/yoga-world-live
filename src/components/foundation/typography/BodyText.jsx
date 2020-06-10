import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../../foundation/withSpacing';
import media from '../media';

const Wrapper = styled.div`
  letter-spacing: 0;
  font-size: ${fontSizeMap.textMobile};
  color: ${colors.text.primary};
  font-weight: 200;

  ${media.aboveTablet`
     font-size: ${fontSizeMap.text};
  `};

  ${media.belowTablet`
     font-size: ${fontSizeMap.textMobile};
  `}
`;

const BodyText = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default withSpacing(BodyText);
