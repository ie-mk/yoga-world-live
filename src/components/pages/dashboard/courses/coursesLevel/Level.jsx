import React from 'react';
import Styled from './CoursesLevel.styles';
import BodyText from '../../../../foundation/typography/BodyText';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import ProfileLearning from '../../../../foundation/profileLearning/ProfileLearning';
import { useRouter } from 'next/router';
import ErrorBoundary from '../../../../ErrorBoundary';
import { ErrorMessage } from 'formik';

const Level = ({ courses, learningPathData, heading }) => {
  const router = useRouter();

  const toCourseStartPage = (courseId, title) => {
    const url = `/courses/startPage?title=${title}&courseId=${courseId}`;

    router.push(url, url, { shallow: true });
  };

  if (!learningPathData) return null;

  return (
    <ErrorBoundary>
      <Styled.Wrapper>
        <SectionTitle text={heading} textAlign="center" />
        <Styled.TextWrapper>
          <BodyText>{learningPathData && learningPathData.descr}</BodyText>
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
            Object.keys(courses).map((courseId, i) => {
              const course = courses[courseId];
              if (!course) return null;

              return (
                <ProfileLearning
                  key={i}
                  imageSrc={
                    (course && course.images && course.images[0]) ||
                    (learningPathData &&
                      learningPathData.images &&
                      learningPathData.images[0])
                  }
                  title={course.title}
                  subtitle={course.level}
                  onClick={() => toCourseStartPage(courseId, course.title)}
                />
              );
            })}
        </Grid>
      </Styled.Wrapper>
    </ErrorBoundary>
  );
};

export default Level;
