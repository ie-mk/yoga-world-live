import React from 'react';
import { ContainerBase } from '../../../foundation';
import Button from '../../../foundation/button/Button';
import Styled from './PracticalTasks.style';
import Table from '../table/Table';
import AdminDropDown from '../../../foundation/dropdown/AdminDropDown';
import { Formik, ErrorMessage, Field } from 'formik';

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
  const categoryarr = [
    { show: 'Choose category', value: '' },
    { show: 'development', value: 'development' },
    { show: 'testing', value: 'testing' },
  ];
  const categoryoptions = categoryarr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });

  const skillarr = [
    { show: 'Choose Skill', value: '' },
    { show: 'Html', value: 'Html' },
    { show: 'Php', value: 'Php' },
  ];
  const skilloptions = skillarr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });

  const levelarr = [
    { show: 'Choose Level', value: '' },
    { show: 'Beginner', value: 'Beginner' },
    { show: 'Intermidate', value: 'Intermidate' },
    { show: 'Advance', value: 'Advance' },
  ];
  const leveloptions = levelarr.map(k => {
    return (
      <option key={k.show} value={k.value}>
        {k.show}
      </option>
    );
  });
  return (
    <ContainerBase marginTop="30px">
      <Formik enableReinitialize={true}>
        <form>
          <Styled.DropdownWrapper>
            <Styled.DropdownItemWrapper>
              <AdminDropDown
                classNameString="select"
                name="category"
                label="Category"
                component="select"
                displayLabelLeft="flex"
                align="center"
                width="100%"
                dropdownWidth="250px"
                marginRight="20px"
                height="47px"
                placeholder="Choose Category"
                options={categoryoptions}
              />
            </Styled.DropdownItemWrapper>
            <Styled.DropdownItemWrapper>
              <AdminDropDown
                classNameString="select"
                name="skill"
                label="Skill"
                component="select"
                marginLeft="25px"
                marginRight="20px"
                width="100%"
                dropdownWidth="250px"
                height="47px"
                displayLabelLeft="flex"
                align="center"
                placeholder="Choose Skill"
                options={skilloptions}
              />
            </Styled.DropdownItemWrapper>
            <Styled.DropdownItemWrapper>
              <AdminDropDown
                classNameString="select"
                name="level"
                label="Level"
                component="select"
                width="100%"
                dropdownWidth="250px"
                marginLeft="25px"
                marginRight="20px"
                height="47px"
                displayLabelLeft="flex"
                align="center"
                placeholder="Choose Level"
                options={leveloptions}
              />
            </Styled.DropdownItemWrapper>
          </Styled.DropdownWrapper>
        </form>
      </Formik>

      <Styled.TableWrapper>
        <Table columnHeaders={columnHeaders}>
          {Object.keys(messages).map((id, idx) => {
            const rowData = messages[id];
            if (!rowData) return null;

            return (
              <Table.Tr key={id}>
                <Table.Td>{idx + 1}</Table.Td>
                <Table.Td>{rowData.taskName}</Table.Td>
                <Table.Td>{rowData.Category}</Table.Td>
                <Table.Td>{rowData.Level}</Table.Td>
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
                    onClick={() => handleReply(id)}
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
    </ContainerBase>
  );
};

export default PracticalTasks;
