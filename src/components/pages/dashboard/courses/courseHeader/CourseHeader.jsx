import React from 'react';
import Styled from './CourseHeader.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import ContainerBase from '../../../../foundation/ContainerBase';
import Button from '../../../../foundation/button/Button';
import CheckBoxWithText from '../../../../foundation/checkboxwithtext/CheckBoxWithText';

const Label = ({ keyname, value }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Styled.Label color="Sapphire" fontSize="text">
        {keyname}:
      </Styled.Label>
      <Styled.Label color="white" fontSize="h5" fontWeight="bold">
        {value}
      </Styled.Label>
    </div>
  );
};

var data = [
  { Item: 'Take all our courses online' },
  { Item: 'Take all our courses online' },
  { Item: 'Take all our courses online' },
  { Item: 'Take all our courses online' },
];

const studentRating = '⭐⭐⭐⭐⭐';

const CourseHeader = ({ title }) => {
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
          <SectionTitle text={title} textAlign="center" />
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
          <Label keyname="Level" value="Beginner" />
          <Label keyname="Content" value="36 Lessons under 4 Chapters" />
          <Label keyname="Duration" value="4 weeks" />
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
        <ContainerBase marginTop="xxl">
          <Grid
            columns="1fr"
            mediaConfig={{
              aboveTabletLarge: {
                'grid-template-columns': '1fr 1fr',
              },
              belowDesktop: {
                'grid-gap': spacing.xl,
              },
            }}
            gridGap={spacing.xxxxl}
          >
            <Styled.ContentWrapper>
              <Styled.StyledHeader>What you will learn </Styled.StyledHeader>
              <Styled.ItemsWrapper>
                {data.map((s, i) => {
                  return (
                    <CheckBoxWithText
                      key={i}
                      label={s.Item}
                      color="white"
                      fontSize="text"
                      noMargin={true}
                      padding="sm"
                    />
                  );
                })}
              </Styled.ItemsWrapper>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper>
              <Styled.StyledHeader>Requirements </Styled.StyledHeader>
              <Styled.ItemsWrapper>
                {data.map((s, i) => {
                  return (
                    <CheckBoxWithText
                      key={i}
                      label={s.Item}
                      color="white"
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
