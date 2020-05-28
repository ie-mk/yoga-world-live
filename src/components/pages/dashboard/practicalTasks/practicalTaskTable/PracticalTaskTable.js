import React from 'react';
import Styled from './PracticalTaskTable.styles';
import Button from '../../../../foundation/button/Button';

const Table = ({ columnHeaders, data }) => {
  const handleReply = messageId => {
    // TODO
  };

  const headers = columnHeaders.map((key, index) => (
    <Styled.Th>{columnHeaders[index]}</Styled.Th>
  ));

  const tableRows = Object.keys(data).map((id, idx) => {
    const rowData = data[id];
    if (!rowData) return null;

    return (
      <Styled.Tr key={id}>
        <Styled.Td>{idx + 1}</Styled.Td>
        <Styled.Td>{rowData.taskName}</Styled.Td>
        <Styled.Td>{rowData.Category}</Styled.Td>
        <Styled.Td>{rowData.Level}</Styled.Td>
        <Styled.Td>{rowData.Skills}</Styled.Td>
        <Styled.Td>
          <img
            style={{ width: '28px', height: '28px' }}
            src="svg/noun_link.svg"
          />
        </Styled.Td>
        <Styled.Td>
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
        </Styled.Td>
      </Styled.Tr>
    );
  });
  return (
    <Styled.Table>
      <Styled.THead>
        <tr>{headers}</tr>
      </Styled.THead>
      <Styled.Tbody>{tableRows}</Styled.Tbody>
    </Styled.Table>
  );
};

export default Table;
