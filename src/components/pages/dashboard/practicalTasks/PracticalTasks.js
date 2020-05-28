import React from 'react';
import { ContainerBase } from '../../../foundation';
import PracticalTasksTable from './practicalTaskTable/PracticalTaskTable';
import Styled from './PracticalTasks.style';

const PracticalTasks = () => {
  const messages = {
    '124jq23j234': {
      senderId: '845235o2u35',
      taskName: 'Task Name',
      Category: 'Development',
      Level: 'Beginner',
      Skills: 'Html,CSS',
    },
    '124jq23ddj234': {
      senderId: '845235o2u35',
      taskName: 'Task Name',
      Category: 'Development',
      Level: 'Beginner',
      Skills: 'PHP',
    },
  };

  const columnHeaders = [
    'S.No',
    'Task Name',
    'Category',
    'Level',
    'Skills',
    'Link',
    'Actions',
  ];
  return (
    <ContainerBase marginTop="30px">
      <Styled.DropdownWrapper>
        <div>
          <Styled.Label>Category</Styled.Label>
          <Styled.Select>
            <option value="">Choose category</option>
          </Styled.Select>
        </div>
        <div>
          <Styled.Label>Skill</Styled.Label>
          <Styled.Select>
            <option value="">Choose Skill</option>
          </Styled.Select>
        </div>
        <div>
          <Styled.Label>Level</Styled.Label>
          <Styled.Select>
            <option value="">Choose Level</option>
          </Styled.Select>
        </div>
      </Styled.DropdownWrapper>
      <Styled.TableWrapper>
        <PracticalTasksTable columnHeaders={columnHeaders} data={messages} />
      </Styled.TableWrapper>
    </ContainerBase>
  );
};

export default PracticalTasks;
