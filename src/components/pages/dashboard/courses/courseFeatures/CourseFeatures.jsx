import React from 'react';
import ContainerBase from '../../../../foundation/ContainerBase';
import Grid from '../../../../foundation/Grid';
import ResponsiveImage from '../../../../foundation/ResponsiveImage';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import BodyText from '../../../../foundation/typography/BodyText';
import Button from '../../../../foundation/button/Button';
import Styled from './CourseFeatures.styles';

const CourseFeatures = () => {
  return (
    <ContainerBase
      marginTop="xxxl"
      flexDirection="row"
      mediaConfig={{
        belowDesktop: {
          padding: 0,
        },
      }}
    >
      <Styled.Wrapper>
        <ResponsiveImage
          src="/img/Background.png"
          height="100vh"
          width="100%"
          position="absolute"
        />
        <Grid
          mediaConfig={{
            aboveMobileLarge: {
              'grid-template-columns': 'minmax(0, 1fr) 1fr',
            },
          }}
          columns="1fr"
        >
          <ContainerBase
            display="flex"
            paddingLeft="xxl"
            flex="1"
            flexDirection="column"
            zIndex="1"
          >
            <SectionTitle text="Course Features" />

            <Styled.ItemsWrapper>
              <Styled.ItemContainer>
                <input type="checkbox" /> Take all our courses online
              </Styled.ItemContainer>
              <Styled.ItemContainer>
                <input type="checkbox" /> Course available in On-site
              </Styled.ItemContainer>
              <Styled.ItemContainer>
                <input type="checkbox" /> Self-paced and interactive
              </Styled.ItemContainer>
            </Styled.ItemsWrapper>
            <Button maxWidth="350px" type="primary" size="lg">
              START LEARNING
            </Button>
          </ContainerBase>
          <ContainerBase position="relative">
            <ResponsiveImage
              src="/img/Learning_Path_Illustration.png"
              width="100%"
              padding="32%"
              backGroundSize="contain"
            />
          </ContainerBase>
        </Grid>
        <Styled.FootWrapper>
          Learn new skills and grow your career
        </Styled.FootWrapper>
      </Styled.Wrapper>
    </ContainerBase>
  );
};

export default CourseFeatures;
