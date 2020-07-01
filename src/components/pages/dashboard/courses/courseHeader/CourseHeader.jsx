import React from 'react';
import Styled from './CourseHeader.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import ContainerBase from '../../../../foundation/ContainerBase';
import Button from '../../../../foundation/button/Button';
import GreenCheckBoxWithText from '../../../../foundation/greencheckboxwithtext/GreenCheckBoxWithText.jsx';

const Label = ({ keyname, value }) => {
  return (
    <ContainerBase display="flex" flexDirection="row" paddingBottom="md">
      <Styled.Label color="bluelight" fontSize="text">
        {keyname}:
      </Styled.Label>
      <Styled.Label fontSize="h5" fontWeight="bold">
        {value}
      </Styled.Label>
    </ContainerBase>
  );
};

var data = [
  { Item: 'Take all our courses online' },
  { Item: 'Take all our courses online' },
  { Item: 'Take all our courses online' },
  { Item: 'Take all our courses online' },
];

const studentRating = '⭐⭐⭐⭐⭐';

const CourseHeader = ({ title, course }) => {
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100%"
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
          <Styled.StyledHeader fontSize="h2">{title}</Styled.StyledHeader>
        </Styled.HeaderWrapper>

        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
              'grid-template-columns': '1fr 1fr',
            },
          }}
          gridGap={spacing.xl}
        >
          <Label keyname="Author" value="Stephen Segmister" />
          <Label keyname="Student Rating" value={studentRating} />
          <Label keyname="Level" value={course.level} />
          <Label keyname="Content" value={course.numberOfChapters} />
          <Label keyname="Duration" value={course.duration} />
          <Button
            type="primary"
            size="lg"
            padding="10px 30px"
            maxWidth="280px"
            margin="0"
          >
            START Course
          </Button>
        </Grid>
        <ContainerBase marginTop="xxl" marginBottom="xxl">
          <Grid
            columns="1fr"
            mediaConfig={{
              aboveTabletLarge: {
                'grid-template-columns': '1fr 1fr',
              },
              belowDesktop: {
                'grid-gap': spacing.xxl,
              },
            }}
            gridGap={spacing.xxxxl}
          >
            <Styled.ContentWrapper>
              <Styled.StyledHeader fontSize="h3">
                What you will learn{' '}
              </Styled.StyledHeader>
              <Styled.ItemsWrapper>
                {data.map((s, i) => {
                  return (
                    <GreenCheckBoxWithText
                      key={i}
                      label={s.Item}
                      color="#D5D5D5"
                      fontSize="text"
                      noMargin={true}
                      padding="sm"
                    />
                  );
                })}
              </Styled.ItemsWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
              <Styled.StyledHeader fontSize="h3">
                Requirements{' '}
              </Styled.StyledHeader>
              <Styled.ItemsWrapper>
                {data.map((s, i) => {
                  return (
                    <GreenCheckBoxWithText
                      key={i}
                      label={s.Item}
                      color="#D5D5D5"
                      fontSize="text"
                      noMargin={true}
                      padding="sm"
                    />
                  );
                })}
              </Styled.ItemsWrapper>
            </Styled.ContentWrapper>
          </Grid>
        </ContainerBase>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default CourseHeader;
