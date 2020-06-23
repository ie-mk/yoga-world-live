import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { resourceActions } from '../../store/actions';
import { LEARNING_PATH_VALUES, LEARNING_PATH, LEVEL } from '../../constants';
import { getCourses, getLearningPaths } from '../../store/selectors';
import CoursesLearningPath from '../../components/pages/dashboard/courses/coursesLearningPath/CoursesLearningPath';
import ContainerBase from '../../components/foundation/ContainerBase'; //'../../../../foundation/ContainerBase';
import LearningPathCard from '../../components/foundation/learningPathCard/LearningPathCard';
import Grid from '../../components/foundation/Grid';
import { background, spacing } from '../../constants/styles';
import SectionTitle from '../../components/foundation/typography/SectionTitle';
import ProfileLearning from '../../components/foundation/profileLearning/ProfileLearning';
import CoursesLevel from '../../components/pages/dashboard/courses/coursesLevel/CoursesLevel';

const Path = ({ dispatch, courses, learningPaths }) => {
  const {
    query: { learningPathId },
  } = useRouter();

  const learningPathData = learningPaths[learningPathId];
  const title = learningPathData.title;

  console.log('------learningPathData: ', learningPathData);

  useEffect(() => {
    dispatch(resourceActions.resetCourses());
    dispatch(
      resourceActions.fetchCourses.request({
        queries: {
          learningPath: ['==', title],
        },
      }),
    );
  }, []);

  let heading = LEARNING_PATH[title] + ' Learning Path';
  heading = heading.toUpperCase();
  console.log('---courses--');
  console.log(courses);

  return (
    <ErrorBoundary>
      <>
        <CoursesLearningPath title={heading} descr={learningPathData.descr} />

        <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
          {
            <CoursesLevel
              courses={courses}
              learningPathData={learningPathData}
            />
          }
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
  learningPaths: getLearningPaths(state),
});

export default connect(mapStateToProps)(Path);
