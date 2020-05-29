import React from 'react';
import { ContainerBase } from '../../../foundation';
import Table from '../table/Table';
import Button from '../../../foundation/button/Button';

const messages = {
  '124jq23j234': {
    senderId: '845235o2u35',
    senderName: 'John',
    email: 'some@email.com',
    senderPhone: '+44123874533',
    message: 'Some text message',
  },
  '124jq23ddj234': {
    senderId: '845235o2u35',
    senderName: 'Jack',
    email: 'some@email.com',
    senderPhone: '+44123874533',
    message: 'Some text message2',
  },
};

const columnHeaders = [
  'S.No',
  'Student Name',
  'Email',
  'Phone',
  'Message',
  'Actions',
];

const Inbox = () => {
  const handleReply = messageId => {
    // TODO
  };

  return (
    <ContainerBase margin="25px" marginRight="25px" marginTop="30px">
      <Table columnHeaders={columnHeaders}>
        {Object.keys(messages).map((id, idx) => {
          const rowData = messages[id];
          if (!rowData) return null;

          return (
            <Table.Tr key={id}>
              <Table.Td>{idx + 1}</Table.Td>
              <Table.Td>{rowData.senderName}</Table.Td>
              <Table.Td>{rowData.email}</Table.Td>
              <Table.Td>{rowData.senderPhone}</Table.Td>
              <Table.Td>{rowData.message}</Table.Td>
              <Table.Td>
                <Button
                  width="100px"
                  height="48px"
                  type="action"
                  fontSize="20px"
                  borderRadius="sm"
                  onClick={() => handleReply(id)}
                >
                  Reply
                </Button>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
    </ContainerBase>
  );
};

export default Inbox;
