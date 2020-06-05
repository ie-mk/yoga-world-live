import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import ContainerBase from '../components/foundation/ContainerBase';

const Profile = () => {
  return (
    <ErrorBoundary>
      <PageContent>
        <ContainerBase marginTop="xxxxxl">Profile page</ContainerBase>
      </PageContent>
    </ErrorBoundary>
  );
};

export default Profile;
