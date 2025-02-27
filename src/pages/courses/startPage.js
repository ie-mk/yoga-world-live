import React, { useEffect } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import { useRouter } from 'next/router';
import PageContent from '../../components/foundation/PageContent';
import { connect } from 'react-redux';
import { getChaptersByCourseId, getCourses } from '../../store/selectors';
import CourseHeader from '../../components/pages/dashboard/courses/courseHeader/CourseHeader';
import CourseOutline from '../../components/pages/dashboard/courses/courseOutline/CourseOutline';
import needsLoginWrapper from '../../utils/needsLoginWrapper';
import SpinnerLarge from '../../components/foundation/spinner/SpinnerLarge';
import { resourceActions } from '../../store/actions';

const StartPage = ({ dispatch, courses, loading, chaptersByCourse }) => {
  const {
    query: { courseId },
  } = useRouter();

  useEffect(() => {
    dispatch(resourceActions.fetchChapters.request(courseId));
  }, []);

  const course = courses[courseId];

  if (!course) return null;

  let courseTitle = course.title;
  courseTitle = courseTitle && courseTitle.toUpperCase();

  const chapters = chaptersByCourse[courseId] || {};

  return (
    <ErrorBoundary>
      <>
        <CourseHeader title={courseTitle} course={course} courseId={courseId} />
        {loading ? <SpinnerLarge /> : null}
        <PageContent hasDefaultMarginTop={false} maxWidth="1100px">
          <CourseOutline chapters={chapters} courseId={courseId} />
        </PageContent>
      </>
    </ErrorBoundary>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
  loading: state.user.loading || state.user.startingCourseLoading,
  chaptersByCourse: getChaptersByCourseId(state),
});

export default connect(mapStateToProps)(needsLoginWrapper(StartPage));
