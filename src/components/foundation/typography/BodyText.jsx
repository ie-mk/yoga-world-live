import React from 'react';
import styled from 'styled-components';
import { fontSizeMap } from '../../../constants/styles';

const Wrapper = styled.div`
  font-size: ${fontSizeMap.text};
  letter-spacing: 0;
  font: Regular 18px/24px Montserrat;
`;

const BodyText = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default BodyText;
