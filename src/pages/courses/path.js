import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH, LEVEL } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';
import CoursesLevel from '../../components/pages/dashboard/courses/coursesLevel/CoursesLevel';
import styled from 'styled-components';
import { colors, spacing } from '../../constants/styles';

const Content = styled.div`
  margin-top: 100px;
`;

const Path = ({ dispatch, courses, learningPaths }) => {
  const {
    query: { learningPathId },
  } = useRouter();

  const learningPathData = learningPaths[learningPathId];

  const title = learningPathData && learningPathData.title;

  useEffect(() => {
    if (!learningPathData) {
      dispatch(resourceActions.fetchLearningPaths.request());
    }
  }, [learningPathData]);

  useEffect(() => {
    dispatch(resourceActions.resetCourses());
    if (title) {
      dispatch(
        resourceActions.fetchCourses.request({
          queries: {
            learningPath: ['==', title],
            published: ['==', true],
          },
        }),
      );
    }
  }, [title]);

  let heading = LEARNING_PATH[title];

  if (!learningPathData) return null;

  return (
    <ErrorBoundary>
      <>
        <Content>
          <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
            {
              <CoursesLevel
                title={heading}
                courses={courses}
                learningPathData={learningPathData}
              />
            }
          </PageContent>
        </Content>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
  learningPaths: getLearningPaths(state),
});

export default connect(mapStateToProps)(Path);
