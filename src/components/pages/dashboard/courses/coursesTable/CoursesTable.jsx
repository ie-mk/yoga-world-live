import React from 'react';
import Styled from './CoursesTable.styles';
import Table from '../../table/Table';

const mockData = {
  someId: {
    name: 'bla',
    category: 'bla',
    path: 'frontend',
  },
  someotherId: {
    name: 'bla',
    category: 'bla',
    path: 'frontend',
  },
};

const CoursesTable = ({ showPublished }) => {
  return (
    <Styled.Wrapper>
      <Table
        columnHeaders={[
          'S.No',
          'Name',
          'Category',
          'Path',
          'Level',
          'Published',
          'Edited',
          'Actions',
        ]}
      >
        {Object.keys(mockData).map(key => {
          const data = mockData[key];
          return (
            <Table.Tr key={key}>
              <Table.Td>{data.name}</Table.Td>
              <Table.Td>{data.category}</Table.Td>
              <Table.Td>{data.path}</Table.Td>
              <Table.Td>{data.name}</Table.Td>
              <Table.Td>{data.name}</Table.Td>
              <Table.Td>{data.name}</Table.Td>
              <Table.Td>{data.name}</Table.Td>
              <Table.Td>{data.name}</Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
    </Styled.Wrapper>
  );
};

export default CoursesTable;
