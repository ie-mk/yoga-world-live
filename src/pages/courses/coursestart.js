import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH, LEVEL } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';

const CourseStart = ({ dispatch, courses }) => {
  const {
    query: { coursedata },
  } = useRouter();

  //   useEffect(() => {
  //     dispatch(resourceActions.resetCourses());
  //     dispatch(
  //       resourceActions.fetchCourses.request({  }),
  //     );
  //   }, []);

  console.log(coursedata);
  console.log('---coursedata');

  let heading = 'HTML';
  heading = heading.toUpperCase();

  return (
    <ErrorBoundary>
      <>
        <CoursesLearningPath title={heading} descr="adecd" />

        <PageContent
          hasDefaultMarginTop={false}
          maxWidth="1100px"
        ></PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

export default connect(mapStateToProps)(CourseStart);
