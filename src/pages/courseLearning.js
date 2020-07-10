import React from 'react';
import CourseLearningPage from '../components/pages/courseLearning/CourseLearning';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import { useRouter } from 'next/router';

const CourseLearning = () => {
  const {
    query: { courseId },
  } = useRouter();

  return (
    <ErrorBoundary>
      <PageContent hasDefaultMarginTop={true}>
        <CourseLearningPage courseId={courseId} />
      </PageContent>
    </ErrorBoundary>
  );
};

export default CourseLearning;
