import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ContainerBase } from '../../../foundation';
import Table from '../table/Table';
import Button from '../../../foundation/button/Button';
import Styled from './Inbox.styles';
import AddNewMessage from './addNew/AddNewMessage';
import { resourceActions } from '../../../../store/actions';
import Modal from '../../../modal/Modal';
import { colors } from '../../../../constants/styles';

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

const Inbox = ({ dispatch, profile }) => {
  const handleReply = messageId => {
    // TODO
  };
  console.log(profile);
  const [newAdd, setNewAdd] = useState(false);

  const uid = profile && profile.uid;

  useEffect(() => {
    dispatch(
      resourceActions.fetchMessages.request({
        queries: {
          receiverId: ['==', uid],
        },
      }),
    );
  }, [uid]);

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
          New Message
        </Button>
      </Styled.ButtonWrapper>

      <ContainerBase>
        {newAdd && (
          <Modal
            styles={{
              width: '800px',
              height: 'auto',
              color: colors.black,
            }}
            onClose={() => setNewAdd(false)}
            title="New message"
          >
            <AddNewMessage setNewAdd={setNewAdd} />
          </Modal>
        )}
      </ContainerBase>
    </ContainerBase>
  );
};
const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
});
export default connect(mapStateToProps)(Inbox);
