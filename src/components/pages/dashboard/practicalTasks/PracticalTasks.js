import React from 'react';
import { ContainerBase } from '../../../foundation';
import PracticalTasksTable from './practicalTaskTable/PracticalTaskTable';

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
      <div
        style={{
          textAlign: 'center',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div>
          <label style={{ marginRight: '22px' }}>Category</label>
          <select
            style={{
              width: '250px',
              height: '47px',
              borderRadius: '10px',
              marginRight: '62px',
              textAlignLast: 'center',
            }}
          >
            <option value="">Choose category</option>
          </select>
        </div>
        <div>
          <label style={{ marginRight: '22px' }}>Skill</label>
          <select
            style={{
              width: '250px',
              height: '47px',
              borderRadius: '10px',
              marginRight: '62px',
              textAlignLast: 'center',
            }}
          >
            <option value="">Choose Skill</option>
          </select>
        </div>
        <div>
          <label style={{ marginRight: '22px' }}>Level</label>
          <select
            style={{
              width: '250px',
              height: '47px',
              border: '1px solid #909090',
              borderRadius: '10px',
              textAlignLast: 'center',
              backgroundColor: 'grey',
            }}
          >
            <option value="volvo">Choose Level</option>
          </select>
        </div>
      </div>
      <div
        style={{ marginLeft: '25px', marginRight: '25px', marginTop: '49px' }}
      >
        <PracticalTasksTable columnHeaders={columnHeaders} data={messages} />
      </div>
    </ContainerBase>
  );
};

export default PracticalTasks;
