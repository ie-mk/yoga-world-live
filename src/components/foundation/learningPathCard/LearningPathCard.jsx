import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import PathTitle from '../typography/PathTitle';
import media from '../media';
import { spacing } from '../../../constants/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  padding: 30px;
  ${media.belowTabletLarge`
    padding: 0;
    height: 240px;
  `}
  &:first-child {
    ${media.belowTabletLarge`
      margin-top: ${spacing.xxxl};

    `}
  }
`;

const LearningPathCard = ({ imageSrc, title }) => {
  return (
    <Wrapper>
      <ResponsiveImage height="120px" width="120px" src={imageSrc} />
      <PathTitle text={title} />
    </Wrapper>
  );
};

export default LearningPathCard;
