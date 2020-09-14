import React, { useEffect } from 'react';
import Styled from './CoursesTable.styles';
import Table from '../../table/Table';
import ContainerBase from '../../../../foundation/ContainerBase';
import { spacing } from '../../../../../constants/styles';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import { getCourses, getIsAdmin, getUID } from '../../../../../store/selectors';
import Button from '../../../../foundation/button/Button';
import { LEARNING_PATH, LEVEL } from '../../../../../constants';

const CoursesTable = ({
  dispatch,
  courses,
  showPublished,
  setActiveTab,
  uid,
  isAdmin,
}) => {
  useEffect(() => {
    dispatch(resourceActions.resetCourses());

    const queries = {
      published: ['==', showPublished],
      ownerId: ['==', uid],
    };

    if (isAdmin) {
      delete queries.ownerId;
    }
    console.log('--------isAdmin: ', isAdmin);
    console.log('--------queries: ', queries);

    dispatch(resourceActions.fetchCourses.request({ queries }));
  }, [showPublished, isAdmin]);

  const handleEdit = courseId => {
    setActiveTab('addNew');
    dispatch(resourceActions.setEditableCourseId(courseId));
    dispatch(resourceActions.fetchCourse.request(courseId));
  };

  const handleDelete = courseId => {
    if (confirm('Are you sure you want to delete this course?')) {
      dispatch(resourceActions.deleteCourse.request(courseId));
    }
  };

  return (
    <ContainerBase margin={`0 ${spacing.xl}`}>
      <Table
        columnHeaders={[
          'S.No',
          'Name',
          'Path',
          'Level',
          'Published',
          'Edited',
          'Actions',
        ]}
      >
        {Object.keys(courses)
          .filter(id => courses[id].ownerId === uid || isAdmin)
          .map((courseId, idx) => {
            const data = courses[courseId];
            return (
              <Table.Tr key={courseId}>
                <Table.Td>{idx + 1}</Table.Td>
                <Table.Td>{data.title}</Table.Td>
                <Table.Td>{LEARNING_PATH[data.learningPath]}</Table.Td>
                <Table.Td>{LEVEL[data.level]}</Table.Td>
                <Table.Td>{data.published ? 'Yes' : 'No'}</Table.Td>
                <Table.Td>
                  {data.edited ? data.edited.substring(0, 10) : ''}
                </Table.Td>
                <Table.Td>
                  <Button
                    onClick={() => handleEdit(courseId)}
                    type="action"
                    size="sm"
                    fontSize="12px"
                    margin="0 10px 0 0"
                    borderRadius="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(courseId)}
                    type="action"
                    size="sm"
                    fontSize="12px"
                    margin="0 10px 0 0"
                    borderRadius="sm"
                  >
                    Delete
                  </Button>
                </Table.Td>
              </Table.Tr>
            );
          })}
      </Table>
    </ContainerBase>
  );
};

const mapStateToProps = state => ({
  courses: getCourses(state),
  uid: getUID(state),
  isAdmin: getIsAdmin(state),
});

export default connect(mapStateToProps)(CoursesTable);
