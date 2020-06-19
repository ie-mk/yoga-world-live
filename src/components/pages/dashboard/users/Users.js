import React, { useEffect, useState } from 'react';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import { connect } from 'react-redux';
import Styled from './User.styles';
import Table from '../table/Table';
// import CustomAdminDropDown from '../practicalTasks/customAdminDropDown/CustomAdminDropDown';
// import AddNewMember from '../staff/addNew/addNewMember';
import needsAdmin from '../../../../utils/needsAdmin';
import { adminActions } from '../../../../store/actions';

const DashBoardUsers = ({ dispatch, users = {} }) => {
  useEffect(() => {
    dispatch(adminActions.fetchUsers.request());
  }, []);

  const columnHeaders = ['S.No', 'Member Name', 'Role', 'Image', 'Actions'];

  const [newAdd, setNewAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <ContainerBase marginTop="30px">
        <Styled.TableWrapper>
          <Table columnHeaders={columnHeaders}>
            {Object.keys(users).map((id, idx) => {
              const rowData = users[id];
              if (!rowData) return null;

              return (
                <Table.Tr key={id}>
                  <Table.Td>{idx + 1}</Table.Td>
                  <Table.Td>{rowData.memberName}</Table.Td>
                  <Table.Td>{rowData.role}</Table.Td>
                  <Table.Td>
                    {' '}
                    <img src="svg/icon_profile.svg" />
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
        </Styled.TableWrapper>
        <Styled.ButtonWrapper></Styled.ButtonWrapper>
      </ContainerBase>
    </>
  );
};

const mapStateToProps = state => ({
  users: state,
});

export default needsAdmin(connect(mapStateToProps)(DashBoardUsers));
