import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES } from '../../constants';

const Path = ({ dispatch }) => {
  const {
    query: { path },
  } = useRouter();

  useEffect(() => {
    const b = LEARNING_PATH_VALUES;
    const c = path.replace(' ', '');
    const bla = LEARNING_PATH_VALUES[c];

    debugger;

    dispatch(
      resourceActions.fetchCourses.request({
        queries: {
          learningPath: ['==', LEARNING_PATH_VALUES[path.replace(' ', '')]],
        },
      }),
    );
  });

  return (
    <ErrorBoundary>
      <PageContent hasDefaultMarginTop={true}>
        <h1>Learning path: {path}</h1>
      </PageContent>
    </ErrorBoundary>
  );
};

export default connect()(Path);
