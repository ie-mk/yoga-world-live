import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH, LEVEL } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';

const CourseStart = ({ courses }) => {
  const {
    query: { courseId },
  } = useRouter();

  let heading = 'HTML';
  heading = heading.toUpperCase();

  const course = courses[courseId];

  return (
    <ErrorBoundary>
      <>
        <CoursesLearningPath title={heading} descr="adecd" />

        <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
          <h1>{course.title}</h1>
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

export default connect(mapStateToProps)(CourseStart);
