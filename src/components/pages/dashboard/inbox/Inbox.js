import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { ContainerBase } from '../../../foundation';
import Table from '../table/Table';
import Button from '../../../foundation/button/Button';
import Styled from './Inbox.styles';
import AddNewMessage from './addNew/AddNewMessage';
import ReplyMessage from './addReply/ReplyMessage';
import { resourceActions } from '../../../../store/actions';
import Modal from '../../../modal/Modal';
import { colors } from '../../../../constants/styles';

const columnHeaders = [
  'S.No',
  'Student Name',
  'Email',
  'Phone',
  'Message',
  'Actions',
];

const Inbox = ({ dispatch, profile, messages }) => {
  const handleReply = rowData => {
    setEdit(true);
    setMessageData(rowData);
    // TODO
  };

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [messageData, setMessageData] = useState('');

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
              <Table.Td>{rowData.subject}</Table.Td>
              <Table.Td>{rowData.email}</Table.Td>
              <Table.Td>{rowData.senderPhone}</Table.Td>
              <Table.Td>{rowData.message}</Table.Td>
              <Table.Td>
                <Button
                  width="70px"
                  height="40px"
                  type="action"
                  fontSize="16px"
                  borderRadius="sm"
                  onClick={() => handleReply(rowData)}
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
              color: 'black',
            }}
            fontSize="24px"
            marginTop="20px"
            fontWeight="700"
            onClose={() => setNewAdd(false)}
            title="New Message"
          >
            <AddNewMessage setNewAdd={setNewAdd} />
          </Modal>
        )}

        {edit && (
          <Modal
            styles={{
              width: '800px',
              height: 'auto',
              color: 'black',
            }}
            fontSize="24px"
            marginTop="20px"
            fontWeight="700"
            onClose={() => setEdit(false)}
            title="Reply"
          >
            <ReplyMessage setEdit={setEdit} messageData={messageData} />
          </Modal>
        )}
      </ContainerBase>
    </ContainerBase>
  );
};
const mapStateToProps = state => ({
  profile: state.user.loginProviderData,
  messages: state.messages.data,
});
export default connect(mapStateToProps)(Inbox);
