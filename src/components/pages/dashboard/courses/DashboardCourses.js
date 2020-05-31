import React, { useState } from 'react';
import { ContainerBase } from '../../../foundation';
import CourseForm from './CourseForm/CourseForm';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';
import Styled from './DashboardCourses.styles';
import CoursesTable from './coursesTable/CoursesTable';

const DashboardCourses = () => {
  const [activeTab, setActiveTab] = useState('published');

  const showPublished = activeTab === 'published';
  const showUnpublished = activeTab === 'unpublished';
  const showNew = activeTab === 'addNew';

  return (
    <>
      <CenteredFlexContainer paddingTop="xxxxl" flexDirection="row">
        <Styled.Title
          onClick={() => setActiveTab('published')}
          active={showPublished}
        >
          Published(10)
        </Styled.Title>
        <Styled.Title
          onClick={() => setActiveTab('unpublished')}
          active={showUnpublished}
        >
          Unpublished(06)
        </Styled.Title>
        <Styled.Title onClick={() => setActiveTab('addNew')} active={showNew}>
          Add New
        </Styled.Title>
      </CenteredFlexContainer>
      {showPublished || showUnpublished ? (
        <CoursesTable showPublished={showPublished} />
      ) : null}
      {showNew ? <CourseForm /> : null}
    </>
  );
};

export default DashboardCourses;
