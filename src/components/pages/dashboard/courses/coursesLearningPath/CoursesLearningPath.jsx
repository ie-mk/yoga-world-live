import React from 'react';
import Styled from './CoursesLearningPath.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import BodyText from '../../../../foundation/typography/BodyText';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';

const CoursesLearningPath = ({ title, descr, img }) => {
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src={img || '/img/sitting.png'}
        height="100vh"
        width="100%"
        position="absolute"
        backgroundSize="contain"
        mediaConfig={{
          belowTabletLarge: {
            backgroundImage: 'url("/img/sitting.png")',
          },
        }}
      />
      <Styled.Content>
        <Styled.HeaderWrapper>
          <SectionTitle text={title} textAlign="center" />
        </Styled.HeaderWrapper>
        <Styled.TextWrapper>
          <BodyText>{descr}</BodyText>
        </Styled.TextWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CoursesLearningPath;
