import React from 'react';
import styled from 'styled-components';
import ResponsiveImage from '../ResponsiveImage';
import PathTitle from '../typography/PathTitle';
import media from '../media';
import { spacing } from '../../../constants/styles';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  padding: 30px;
  cursor: pointer;
  background: transparent linear-gradient(180deg, #a29f9e4d 0%, #a29f9e 100%) 0%
    0% no-repeat padding-box;
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

const LearningPathCard = ({ imageSrc, title, learningPathId }) => {
  const router = useRouter();

  const handlePathClick = () => {
    const path = `/courses/path?learningPathId=${learningPathId}`;
    router.push(path, path, { shallow: true });
  };

  return (
    <Wrapper onClick={() => handlePathClick()}>
      <ResponsiveImage height="120px" width="120px" src={imageSrc} />
      <PathTitle margin="30px 0 0" fontWeight="500" text={title} />
    </Wrapper>
  );
};

export default LearningPathCard;
