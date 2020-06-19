import React from 'react';
import Styled from './CoursesLearningPath.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import BodyText from '../../../../foundation/typography/BodyText';
import ContainerBase from '../../../../foundation/ContainerBase';
import SectionTitle from '../../../../foundation/typography/SectionTitle';

const CoursesLearningPath = ({ title }) => {
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100vh"
        width="100%"
        position="absolute"
        mediaConfig={{
          belowTabletLarge: {
            backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        <Styled.HeaderWrapper>
          <SectionTitle text={title} />
        </Styled.HeaderWrapper>
        <Styled.TextWrapper>
          <BodyText>
            With real world projects you’ll master the tech skills companies
            want. Our knowledgeable mentors guide your learning and are focused
            on answering your questions, motivating you and keeping you on
            track. Get a custom learning plan tailored to fit your busy life.
          </BodyText>
        </Styled.TextWrapper>
        <ContainerBase position="relative">
          <ResponsiveImage
            src="/img/Frontend_Dev_Illustration.png"
            width="90%"
            padding="32%"
            backGroundSize="contain"
          />
        </ContainerBase>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CoursesLearningPath;
