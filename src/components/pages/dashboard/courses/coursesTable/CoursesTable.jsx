import React, { useEffect } from 'react';
import Styled from './CoursesTable.styles';
import Table from '../../table/Table';
import ContainerBase from '../../../../foundation/ContainerBase';
import { spacing } from '../../../../../constants/styles';
import { connect } from 'react-redux';
import { resourceActions } from '../../../../../store/actions';
import { getCourses } from '../../../../../store/selectors';
import Button from '../../../../foundation/button/Button';

const CoursesTable = ({ dispatch, courses, showPublished }) => {
  useEffect(() => {
    dispatch(resourceActions.fetchCourses.request());
  }, []);

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
        {Object.keys(courses).map((key, idx) => {
          const data = courses[key];
          return (
            <Table.Tr key={key}>
              <Table.Td>{idx + 1}</Table.Td>
              <Table.Td>{data.title}</Table.Td>
              <Table.Td>{data.learningPath}</Table.Td>
              <Table.Td>{data.level}</Table.Td>
              <Table.Td>{data.published}</Table.Td>
              <Table.Td>{data.edited}</Table.Td>
              <Table.Td>
                <Button type="action" fontSize="20px" borderRadius="sm">
                  Edit
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
});

export default connect(mapStateToProps)(CoursesTable);
