import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CourseHeader from '../../components/pages/dashboard/courses/courseHeader/CourseHeader';
import CourseOutline from '../../components/pages/dashboard/courses/courseOutline/CourseOutline';

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
          <CourseOutline />
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

export default connect(mapStateToProps)(CourseStart);
