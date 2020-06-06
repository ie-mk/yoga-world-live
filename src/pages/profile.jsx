import React from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PageContent from '../components/foundation/PageContent';
import UserProfile from '../components/profile/Profile';

const Profile = () => {
  return (
    <ErrorBoundary>
      <PageContent>
        <UserProfile />
      </PageContent>
    </ErrorBoundary>
  );
};

export default Profile;
