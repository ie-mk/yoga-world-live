import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';
import withSpacing from '../../foundation/withSpacing';
import media from '../media';

const H5 = styled.h5`
  font-size: ${fontSizeMap.textMobile};
  color: ${({ color }) => (color ? color : colors.text.primary)};
  margin: ${({ margin }) => margin || ''};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '')}
    ${media.aboveTablet`
     font-size: ${fontSizeMap.h5};
  `};
`;

const PathTitle = ({ text, margin }) => {
  return <H5 margin={margin}>{text}</H5>;
};

export default PathTitle;
