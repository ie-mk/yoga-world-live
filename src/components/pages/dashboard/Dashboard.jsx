import React, { useState, useEffect } from 'react';
import { ContainerBase, Grid } from '../../foundation';
import DashboardMenu from './dashboardMenu/DashboardMenu';
import NotificationsTab from './notificationsTab/NotificationsTab';
import { connect } from 'react-redux';
import Router, { useRouter } from 'next/router';
import { userActions } from '../../../store/actions';
import Styled from './Dashboard.styles';
import Logo from '../../foundation/Logo';
import DashboardItem from './dashboardItem/DashboardItem';
import DashboardContent from './DashboardContent';
const Dashboard = ({ dispatch, user }) => {
  useEffect(() => {
    if (!user) return;
    if (!user.uid) {
      debugger;
      Router.push('/login');
    }
    dispatch(userActions.fetchUserProfile.request(user.uid));
  }, user && user.uid);

  const { query } = useRouter();

  const makeActive = activeTab => {
    const url = `/dashboard?activeTab=${activeTab}`;
    Router.push(url, url, { shallow: true });
  };

  const activeTab = query && query.activeTab;

  const showNotifications = activeTab === 'notifications';

  // if (!user) return null;
  return (
    <Styled.Wrapper>
      <Grid
        columns="0.5fr 2.5fr"
        mediaColConfig={{
          belowTablet: '1fr',
        }}
      >
        <Styled.MenuWrapper>
          <Logo
            imgSrc="/logo/logo_with_name.png"
            width="150px"
            padding="30px 50px 50px"
          />
          <DashboardMenu active={activeTab} setActiveComponent={makeActive} />
        </Styled.MenuWrapper>
        <Styled.Wrapper>
          {/*{showProfile && <ProfileTab />}*/}
          {/*showNotifications && <NotificationsTab />*/}
          <DashboardContent />
        </Styled.Wrapper>
      </Grid>
    </Styled.Wrapper>
  );
};

const mapStateToProps = state => ({
  user: state.user.loginProviderData,
});

export default connect(mapStateToProps)(Dashboard);
