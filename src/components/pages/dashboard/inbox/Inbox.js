import React from 'react';
import { ContainerBase } from '../../../foundation';
import Table from '../table/Table';
import { object } from 'firebase-functions/lib/providers/storage';

const Inbox = () => {
  const messages = {
    '124jq23j234': {
      senderId: '1',
      senderName: 'John',
      email: 'some@email.com',
      senderPhone: '+44123874533',
      message: 'Some text message',
      button: 'Reply',
    },
    '124jq23ddj234': {
      senderId: '2',
      senderName: 'Jack',
      email: 'some@email.com',
      senderPhone: '+44123874533',
      message: 'Some text message2',
      button: 'Reply',
    },
  };

  const inboxColumn = {
    SNo: 'S.No',
    studentName: 'Student Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    actions: 'Actions',
  };

  const columnHeaders = Object.values(inboxColumn);
  const columnValues = Object.values(messages);

  return (
    <ContainerBase margin="25px" marginRight="25px" marginTop="30px">
      <Table columnHeaders={columnHeaders} columnValues={columnValues} />
    </ContainerBase>
  );
};

export default Inbox;
