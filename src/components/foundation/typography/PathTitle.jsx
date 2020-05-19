import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';

const H5 = styled.h5`
  font-size: ${fontSizeMap.h5};
`;

const PathTitle = ({ text }) => {
  return <H5>{text}</H5>;
};

export default PathTitle;
