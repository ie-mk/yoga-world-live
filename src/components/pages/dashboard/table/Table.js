import React from 'react';
import Styled from './Table.styles';

const Table = ({ columnHeaders, columnValues }) => {
  const headers = columnHeaders.map((key, index) => (
    <Styled.Th>{columnHeaders[index]}</Styled.Th>
  ));

  const columnVals = columnValues.map((columnValue, index) => (
    <Styled.Tr>
      {Object.values(columnValue).map((key, index) =>
        key != 'Reply' ? (
          <Styled.Td>{key}</Styled.Td>
        ) : (
          <Styled.Td>
            <Styled.Button>{key}</Styled.Button>
          </Styled.Td>
        ),
      )}
    </Styled.Tr>
  ));
  return (
    <Styled.Table>
      <Styled.Tr>{headers}</Styled.Tr>
      {columnVals}
    </Styled.Table>
  );
};

export default Table;
