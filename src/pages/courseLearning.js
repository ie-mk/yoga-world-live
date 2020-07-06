import React from 'react';
import CourseLearningPage from '../components/pages/courseLearning/CourseLearning';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';

const CourseLearning = () => (
  <ErrorBoundary>
    <PageContent hasDefaultMarginTop={true}>
      <CourseLearningPage />
    </PageContent>
  </ErrorBoundary>
);

export default CourseLearning;
