import React, { useState } from 'react';
import { ContainerBase } from '../../../../foundation';
import Button from '../../../../foundation/button/Button';
import Styled from './LearningPathData.styles';
import Table from '../../table/Table';
import AddLearningPath from './addNew/NewLearningPath';
const LearningPathData = () => {
  const messages = {
    '124jq23j234': {
      senderId: '845235o2u35',
      learningPath: 'Learning Path Name',
      Courses: '03',
      Skills: 'Html,CSS',
    },
    '124jq23ddj234': {
      senderId: '845235o2u35',
      learningPath: 'Learning Path Name',
      Courses: '02',
      Skills: 'PHP',
    },
  };

  const columnHeaders = [
    'S.No',
    'Learning Path',
    'Courses',
    'Skills',
    'Image',
    'Actions',
  ];

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <ContainerBase>
      <Table columnHeaders={columnHeaders}>
        {Object.keys(messages).map((id, idx) => {
          const rowData = messages[id];
          if (!rowData) return null;

          return (
            <Table.Tr key={id}>
              <Table.Td>{idx + 1}</Table.Td>
              <Table.Td>{rowData.learningPath}</Table.Td>
              <Table.Td>{rowData.Courses}</Table.Td>
              <Table.Td>{rowData.Skills}</Table.Td>
              <Table.Td>
                {' '}
                <img src="svg/noun_link.svg" />
              </Table.Td>
              <Table.Td>
                <Button
                  margin="22px"
                  width="100px"
                  height="48px"
                  type="action"
                  fontSize="20px"
                  borderRadius="sm"
                  onClick={() => setEdit(true)}
                >
                  Edit
                </Button>
                <Button
                  width="100px"
                  height="48px"
                  type="action"
                  fontSize="20px"
                  borderRadius="sm"
                  onClick={() => handleReply(id)}
                >
                  Delete
                </Button>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
      <Styled.ButtonWrapper>
        <Button
          type="primary"
          width="200px"
          borderRadius="sm"
          height="45px"
          size="sm"
          onClick={() => setNewAdd(true)}
        >
          <i className="fa fa-plus" aria-hidden="true" />
          ADD NEW
        </Button>
      </Styled.ButtonWrapper>

      {(newAdd || edit) && (
        <AddLearningPath
          editTask={edit}
          setEdit={setEdit}
          setNewAdd={setNewAdd}
        />
      )}
    </ContainerBase>
  );
};

export default LearningPathData;
