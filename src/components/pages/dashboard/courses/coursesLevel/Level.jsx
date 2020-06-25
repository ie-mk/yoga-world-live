import React from 'react';
import Styled from './CoursesLevel.styles';
import BodyText from '../../../../foundation/typography/BodyText';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import ProfileLearning from '../../../../foundation/profileLearning/ProfileLearning';
import Router from 'next/router';

const Level = ({ courses, learningPathData, heading }) => {
  console.log('---courses');
  console.log(courses);

  const toCourseStartPage = ({ s }) => {
    Router.push(
      {
        pathname: '/courses/coursestart',
        query: {
          coursedata: s,
        },
      },
      { shallow: true },
    );
  };

  return (
    <Styled.Wrapper>
      <SectionTitle text={heading} textAlign="center" />

      <Styled.TextWrapper>
        <BodyText>{learningPathData.descr}</BodyText>
      </Styled.TextWrapper>
      <Grid
        columns="1fr"
        mediaConfig={{
          aboveTabletLarge: {
            'grid-template-columns': '1fr 1fr 1fr',
          },
          belowDesktop: {
            'grid-gap': spacing.xl,
          },
        }}
        gridGap={spacing.xxxxl}
      >
        {courses &&
          courses.map((s, i) => {
            return (
              <ProfileLearning
                key={i}
                imageSrc={learningPathData.images[0]}
                title={s.title}
                subtitle={s.level}
                background={colors.background.violetprimary}
                onClick={toCourseStartPage(s)}
              />
            );
          })}
      </Grid>
    </Styled.Wrapper>
  );
};

export default Level;
