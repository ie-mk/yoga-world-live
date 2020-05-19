import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import PathTitle from '../typography/PathTitle';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 300px;
  padding: 30px;
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
