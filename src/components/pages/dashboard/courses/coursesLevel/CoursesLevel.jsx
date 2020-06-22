import React from 'react';
import Styled from './CoursesLevel.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import BodyText from '../../../../foundation/typography/BodyText';
import ContainerBase from '../../../../foundation/ContainerBase';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing } from '../../../../../constants/styles';
import ProfileLearning from '../../../../foundation/profileLearning/ProfileLearning';
import {
  LEARNING_PATH_VALUES,
  LEARNING_PATH,
  LEVEL,
} from '../../../../../constants';
import Level from './Level';

const CoursesLevel = ({ courses, learningPathData }) => {
  const coursesData = Object.values(courses);
  console.log('---coursesData--');
  console.log(coursesData);
  const begginercourses = coursesData.filter(a => a.level == 'beginner');

  const intermediatecourses = coursesData.filter(
    a => a.level == 'intermediate',
  );

  let BegginnerHeading =
    'Part-01 : BEGGINER (' + begginercourses.length + ' COURSES)'; //LEARNING_PATH[title] + ' Learning Path';
  let IntermediateHeading =
    'Part-02 : INTERMEDIATE (' + intermediatecourses.length + ' COURSES)'; //LEARNING_PATH[title] + ' Learning Path';

  return (
    <>
      {begginercourses.length !== 0 && (
        <Level
          courses={begginercourses}
          learningPathData={learningPathData}
          heading={BegginnerHeading}
        />
      )}
      {intermediatecourses.length !== 0 && (
        <Level
          courses={intermediatecourses}
          learningPathData={learningPathData}
          heading={IntermediateHeading}
        />
      )}
    </>
  );
  //   return (
  //     <Styled.Wrapper>
  //       <SectionTitle text="Choose a Learning Path" />

  // <Grid
  //   columns="1fr"
  //   mediaConfig={{
  //     aboveTabletLarge: {
  //       'grid-template-columns': '1fr 1fr 1fr',
  //     },
  //     belowDesktop: {
  //       'grid-gap': spacing.xl,
  //     },
  //   }}
  //   gridGap={spacing.xxxxl}
  // >

  //     {courses &&
  //     Object.keys(courses).map(key => {
  //       const course = courses[key];
  //       return(
  //         <ProfileLearning
  //           key={key}
  //           imageSrc={learningPathData.images[0]}
  //           title={course.title}
  //           subtitle= 'sub-title' //{Data.subtitle}
  //           background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
  //         />
  //       )
  //     })}
  // </Grid>
  //     </Styled.Wrapper>
  //   );
};

export default CoursesLevel;
