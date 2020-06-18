import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES } from '../../constants';
import { getCourses } from '../../store/selectors';

const Path = ({ dispatch, courses }) => {
  const {
    query: { path },
  } = useRouter();

  useEffect(() => {
    dispatch(resourceActions.resetCourses());
    dispatch(
      resourceActions.fetchCourses.request({
        queries: {
          learningPath: ['==', LEARNING_PATH_VALUES[path.replace(' ', '')]],
        },
      }),
    );
  }, []);

  return (
    <ErrorBoundary>
      <PageContent hasDefaultMarginTop={true}>
        <h1>Learning path: {path}</h1>
        {courses &&
          Object.keys(courses).map(key => {
            const course = courses[key];
            return <h2>{course.title}</h2>;
          })}
      </PageContent>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
});

export default connect(mapStateToProps)(Path);
