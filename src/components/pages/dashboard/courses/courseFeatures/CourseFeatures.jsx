import React from 'react';
import ContainerBase from '../../../../foundation/ContainerBase';
import Grid from '../../../../foundation/Grid';
import ResponsiveImage from '../../../../foundation/ResponsiveImage';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Button from '../../../../foundation/button/Button';
import Styled from './CourseFeatures.styles';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import { spacing } from '../../../../../constants/styles';

const CourseFeatures = () => {
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100vh"
        width="100%"
        position="absolute"
        mediaConfig={{
          belowTabletLarge: {
            height: '176vh',
            backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTablet: {
              'grid-template-columns': '1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xxxxl}
        >
          <CenteredFlexContainer
            display="flex"
            flexDirection="column"
            zIndex="1"
            mediaConfig={{
              belowTabletLarge: {
                order: '3',
              },
            }}
          >
            <SectionTitle text="Course Features" />

            <Styled.ItemsWrapper>
              <Styled.ItemContainer>
                <img
                  src="/svg/checkmark-circle-outline.svg"
                  aria-hidden="true"
                  alt="icon"
                />{' '}
                Take all our courses online
              </Styled.ItemContainer>
              <Styled.ItemContainer>
                <img
                  src="/svg/checkmark-circle-outline.svg"
                  aria-hidden="true"
                  alt="icon"
                />{' '}
                Course available in On-site
              </Styled.ItemContainer>
              <Styled.ItemContainer>
                <img
                  src="/svg/checkmark-circle-outline.svg"
                  aria-hidden="true"
                  alt="icon"
                />{' '}
                Self-paced and interactive
              </Styled.ItemContainer>
            </Styled.ItemsWrapper>
            <Button type="primary" size="lg" padding="20px 50px">
              START LEARNING
            </Button>
          </CenteredFlexContainer>
          <ContainerBase
            position="relative"
            mediaConfig={{
              belowTabletLarge: {
                order: '1',
              },
            }}
          >
            <ResponsiveImage
              src="/img/Learning_Path_Illustration.png"
              width="100%"
              padding="32%"
              backGroundSize="contain"
            />
          </ContainerBase>
          <ContainerBase
            width="100%"
            mediaConfig={{
              belowTabletLarge: {
                order: '2',
              },
              aboveTabletLarge: {
                gridColumn: '1/3',
                gridRow: 2,
              },
            }}
          >
            <Styled.FootWrapper>
              Learn new skills and grow your career
            </Styled.FootWrapper>
          </ContainerBase>
        </Grid>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CourseFeatures;
