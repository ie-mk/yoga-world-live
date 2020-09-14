import React from 'react';
import Styled from './DashboardMenu.styles';
import { ContainerBase } from '../../../foundation';

const DashboardMenu = ({ setActiveComponent, active, isAdmin }) => {
  return (
    <Styled.Wrapper>
      <ContainerBase>
        {/*<Styled.MenuItem*/}
        {/*  active={active === 'dashboard' || !active}*/}
        {/*  onClick={() => setActiveComponent('dashboard')}*/}
        {/*>*/}
        {/*  <img src="svg/icon_dashboard.svg" />*/}
        {/*  <Styled.Label>Dashboard</Styled.Label>*/}
        {/*</Styled.MenuItem>*/}
        <Styled.MenuItem
          active={active === 'inbox'}
          onClick={() => setActiveComponent('inbox')}
        >
          <img src="svg/icon_inbox.svg" />
          <Styled.Label>Inbox</Styled.Label>
        </Styled.MenuItem>
        <Styled.MenuItem
          data-test="results-properties"
          active={active === 'courses' || !active}
          onClick={() => setActiveComponent('courses')}
        >
          <img src="svg/icon_courses.svg" />
          <Styled.Label>Courses</Styled.Label>
        </Styled.MenuItem>
        {/*<Styled.MenuItem*/}
        {/*  active={active === 'practicalTasks'}*/}
        {/*  onClick={() => setActiveComponent('practicalTasks')}*/}
        {/*>*/}
        {/*  <img src="svg/icon_practical_task.svg" />*/}
        {/*  <Styled.Label>Practical Tasks</Styled.Label>*/}
        {/*</Styled.MenuItem>*/}
        {/*<Styled.MenuItem*/}
        {/*  active={active === 'students'}*/}
        {/*  onClick={() => setActiveComponent('students')}*/}
        {/*>*/}
        {/*  <img src="svg/icon_student.svg" />*/}
        {/*  <Styled.Label>Students</Styled.Label>*/}
        {/*</Styled.MenuItem>*/}
        {isAdmin ? (
          <Styled.MenuItem
            active={active === 'authors'}
            onClick={() => setActiveComponent('authors')}
          >
            <img src="svg/icon_Authors & Learning Paths.svg" />
            <Styled.Label>Learning Paths</Styled.Label>
          </Styled.MenuItem>
        ) : null}
        {/*<Styled.MenuItem*/}
        {/*  active={active === 'staff'}*/}
        {/*  onClick={() => setActiveComponent('staff')}*/}
        {/*>*/}
        {/*  <i className="fa fa-user-secret" aria-hidden="true" />*/}
        {/*  <Styled.Label>Staff</Styled.Label>*/}
        {/*</Styled.MenuItem>*/}
        {isAdmin ? (
          <Styled.MenuItem
            active={active === 'users'}
            onClick={() => setActiveComponent('users')}
          >
            <i className="fa fa-users" aria-hidden="true" />
            <Styled.Label>Users</Styled.Label>
          </Styled.MenuItem>
        ) : null}
        <Styled.MenuItem
          active={active === 'myAuthorProfile'}
          onClick={() => setActiveComponent('myAuthorProfile')}
        >
          <img src="svg/icon_student.svg" />
          <Styled.Label>My Author Profile</Styled.Label>
        </Styled.MenuItem>
      </ContainerBase>
    </Styled.Wrapper>
  );
};

export default DashboardMenu;
