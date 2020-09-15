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
    const url = `/courseLearning?course=${title}&courseId=${courseId}`;
    router.push(url, url, { shallow: true });
  };

  const publishedCoursesKeys =
    (courses && Object.keys(courses).filter(id => courses[id].published)) || [];

  if (!learningPathData || !publishedCoursesKeys.length) return null;

  return (
    <ErrorBoundary>
      <Styled.Wrapper>
        <SectionTitle text={heading} textAlign="center" />
        <Styled.TextWrapper>
          {/*<BodyText color="#455325">*/}
          {/*  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam*/}
          {/*  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam*/}
          {/*  erat, sed diam voluptua. At vero eos et*/}
          {/*</BodyText>*/}
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
            Object.keys(courses)
              .filter(id => courses[id].published)
              .map((courseId, i) => {
                const course = courses[courseId];
                if (!course) return null;

                const title = course.title;
                // skip test courses rendering if contains test
                if (
                  title &&
                  typeof title === 'string' &&
                  title.toLowerCase().includes('test') &&
                  window &&
                  window.location.hostname !== 'localhost'
                ) {
                  return null;
                }

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
                    background="transparent linear-gradient(180deg, #A29F9E4D 0%, #A29F9E 100%) 0% 0% no-repeat padding-box"
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
