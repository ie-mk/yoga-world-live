import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH, LEVEL } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';
import CourseHeader from '../../components/pages/dashboard/courses/courseHeader/CourseHeader';
import CourseOutcome from '../../components/pages/dashboard/courses/courseOutcome/CourseOutcome';

const CourseStart = ({ courses }) => {
  const {
    query: { courseId },
  } = useRouter();

  const course = courses[courseId];

  let courseTitle = course.title;
  courseTitle = courseTitle.toUpperCase();

  return (
    <ErrorBoundary>
      <>
        <CourseHeader title={courseTitle} />

        <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
          {/* <h1>Course Outline</h1> */}
          <CourseOutcome />
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

export default connect(mapStateToProps)(CourseStart);
