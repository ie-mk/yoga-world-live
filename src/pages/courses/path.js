import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';
import ContainerBase from '../../components/foundation/ContainerBase'; //'../../../../foundation/ContainerBase';

const Path = ({ dispatch, courses, learningPaths }) => {
  const {
    query: { learningPathId },
  } = useRouter();

  const learningPathData = learningPaths[learningPathId];
  const title = learningPathData.title;

  useEffect(() => {
    dispatch(resourceActions.resetCourses());
    dispatch(
      resourceActions.fetchCourses.request({
        queries: {
          learningPath: ['==', LEARNING_PATH_VALUES[title.replace(' ', '')]],
        },
      }),
    );
  }, []);

  let heading = LEARNING_PATH[title] + ' Learning Path';
  heading = heading.toUpperCase();

  return (
    <ErrorBoundary>
      {/* <PageContent hasDefaultMarginTop={true}> */}
      {/* <h1>Learning path: {path}</h1> */}
      <>
        <CoursesLearningPath title={heading} descr={learningPathData.descr} />
        {courses &&
          Object.keys(courses).map(key => {
            const course = courses[key];
            return <h2>{course.title}</h2>;
          })}
      </>
      {/* </PageContent> */}
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
  learningPaths: getLearningPaths(state),
});

export default connect(mapStateToProps)(Path);
