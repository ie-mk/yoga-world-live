import React from 'react';
import Styled from './DashboardMenu.styles';
import { ContainerBase } from '../../../foundation';

const DashboardMenu = ({ setActiveComponent, active }) => {
  return (
    <Styled.Wrapper>
      <ContainerBase minWidth="300px">
        <Styled.MenuItem
          active={active === 'dashboard'}
          onClick={() => setActiveComponent('dashboard')}
        >
          <i className="fa fa-user-o" aria-hidden="true" />
          <Styled.Label>Dashboard</Styled.Label>
        </Styled.MenuItem>
        <Styled.MenuItem
          active={active === 'inbox'}
          onClick={() => setActiveComponent('inbox')}
        >
          <i className="fa fa-inbox" aria-hidden="true" />
          <Styled.Label>Inbox</Styled.Label>
        </Styled.MenuItem>
        <Styled.MenuItem
          data-test="results-properties"
          active={active === 'coursesList'}
          onClick={() => setActiveComponent('coursesList')}
        >
          <i className="fa fa-graduation-cap" aria-hidden="true" />
          <Styled.Label>Courses</Styled.Label>
        </Styled.MenuItem>
        <Styled.MenuItem
          active={active === 'tasksList'}
          onClick={() => setActiveComponent('tasksList')}
        >
          <i className="fa fa-heart-o" aria-hidden="true" />
          <Styled.Label>Practical Tasks</Styled.Label>
        </Styled.MenuItem>
        <Styled.MenuItem
          active={active === 'studentsList'}
          onClick={() => setActiveComponent('studentsList')}
        >
          <i className="fa fa-user-o" aria-hidden="true" />
          <Styled.Label>Students</Styled.Label>
        </Styled.MenuItem>
        <Styled.MenuItem
          active={active === 'authorsList'}
          onClick={() => setActiveComponent('authorsList')}
        >
          <i className="fa fa-heart-o" aria-hidden="true" />
          <Styled.Label>Authors & Learning Paths</Styled.Label>
        </Styled.MenuItem>
      </ContainerBase>
    </Styled.Wrapper>
  );
};

export default DashboardMenu;
