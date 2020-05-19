import React from 'react';
import styled from 'styled-components';
import { colors, fontSizeMap } from '../../../constants/styles';

const Wrapper = styled.div`
  letter-spacing: 0;
  font: ${fontSizeMap.text} Montserrat;
  color: ${colors.text.primary};
`;

const BodyText = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BodyText;
