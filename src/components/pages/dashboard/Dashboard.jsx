import React, { useState, useEffect } from 'react';
import { ContainerBase, Grid, Container } from '../../foundation';
import DashboardMenu from './dashboardMenu/DashboardMenu';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { userActions } from '../../../store/actions';
import Styled from './Dashboard.styles';
import Logo from '../../foundation/Logo';
import DashboardTab from './dashboard/DashBoard';
import DashboardHeader from './dashboardHeader/DashboardHeader';
import Inbox from './inbox/Inbox';
import DashboardCourses from './courses/DashboardCourses';
import PracticalTasks from './practicalTasks/PracticalTasks';
import Students from './students/Students';
import AuthorsAndLearningPath from './authors/AuthorsAndLearningPath';
import Staff from './staff/Staff';
import Users from './users/Users';
import AuthorProfile from './authors/authorProfile/AuthorProfile';
import FlexContainer from '../../foundation/FlexContainer';
import { getIsAdmin } from '../../../store/selectors';

const Dashboard = ({ dispatch, user, isAdmin }) => {
  const router = useRouter();

  useEffect(() => {
    if (!user) return;
    if (!user.uid) {
      router.push('/login');
    }
    dispatch(userActions.fetchUserProfile.request(user.uid));
  }, user && user.uid);

  const { query } = useRouter();

  const makeActive = activeTab => {
    const url = `/dashboard?activeTab=${activeTab}`;
    router.push(url, url, { shallow: true });
  };

  const activeTab = query && query.activeTab;

  const dashboard = activeTab === 'dashboard';
  const inbox = activeTab === 'inbox';
  const courses = activeTab === 'courses' || !activeTab;
  const practicalTasks = activeTab === 'practicalTasks';
  const students = activeTab === 'students';
  const authors = activeTab === 'authors';
  const staff = activeTab === 'staff';
  const users = activeTab === 'users';
  const authorProfile = activeTab === 'myAuthorProfile';

  return (
    <Styled.Wrapper>
      <FlexContainer>
        <ContainerBase width="20%" minWidth="200px">
          <Styled.MenuWrapper>
            <Logo
              title="YOGA WORLD"
              //imgSrc="/logo/logo_with_name.png"
              width="150px"
              height="50px"
              padding="30px 50px 50px"
            />
            <DashboardMenu
              active={activeTab}
              isAdmin={isAdmin}
              setActiveComponent={makeActive}
            />
          </Styled.MenuWrapper>
        </ContainerBase>
        <ContainerBase width="80%">
          <DashboardHeader user={user} />
          <Styled.Wrapper>
            {/*{dashboard && <DashboardTab />}*/}
            {inbox && <Inbox />}
            {courses && <DashboardCourses />}
            {/*{students && <Students />}*/}
            {authors && isAdmin && <AuthorsAndLearningPath />}
            {staff && isAdmin && <Staff />}
            {users && isAdmin && <Users />}
            {authorProfile && <AuthorProfile />}
          </Styled.Wrapper>
        </ContainerBase>
      </FlexContainer>
    </Styled.Wrapper>
  );
};

const mapStateToProps = state => ({
  user: state.user.loginProviderData,
  isAdmin: getIsAdmin(state),
});

export default connect(mapStateToProps)(Dashboard);
