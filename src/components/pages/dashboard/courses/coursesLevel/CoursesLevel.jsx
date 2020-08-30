import React from 'react';
import Level from './Level';
import { connect } from 'react-redux';
import { getCoursesByLevel } from '../../../../../store/selectors';
import ErrorBoundary from '../../../../ErrorBoundary';
import PathTitle from '../../../../foundation/typography/PathTitle';
import Styled from './CoursesLevel.styles';

const CoursesLevel = ({ coursesByLevel, learningPathData, title }) => {
  const begginerCourses = coursesByLevel && coursesByLevel.beginner;

  const intermediateCourses = coursesByLevel && coursesByLevel.intermediate;

  const advancedCourses = coursesByLevel && coursesByLevel.advanced;

  const begginnerHeading = 'BEGGINER';
  const intermediateHeading = 'INTERMEDIATE';
  const advancedHeading = 'ADVANCED';

  return (
    <ErrorBoundary>
      <Styled.RowWrapper>
        <PathTitle text="Courses >" color="#555555" />
        <PathTitle text={title} color="#555555" fontWeight="600" />
      </Styled.RowWrapper>
      {Object.keys(begginerCourses).length ? (
        <Level
          courses={begginerCourses}
          learningPathData={learningPathData}
          heading={begginnerHeading}
        />
      ) : null}
      {Object.keys(intermediateCourses).length ? (
        <Level
          courses={intermediateCourses}
          learningPathData={learningPathData}
          heading={intermediateHeading}
        />
      ) : null}
      {Object.keys(advancedCourses).length ? (
        <Level
          courses={advancedCourses}
          learningPathData={learningPathData}
          heading={advancedHeading}
        />
      ) : null}
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  coursesByLevel: getCoursesByLevel(state),
});

export default connect(mapStateToProps)(CoursesLevel);
