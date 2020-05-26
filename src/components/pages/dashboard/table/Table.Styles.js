import styled from 'styled-components';
import {
  spacing,
  fontSizeMap,
  colors,
  borderRadius,
} from '../../../../constants/styles';

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-spacing: 0;
`;

const Td = styled.td`
  height: 92px;
  font-size: 24px;
  color: #333333;
`;
const THead = styled.thead`
  background-color: #191f36;

  color: white;
`;
const Th = styled.th`
  height: 60px;
  font-size: 24px;
`;
const Tbody = styled.tbody`
  height: 50px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Tr = styled.tr`
  :nth-child(even) {
    background-color: #e8e8e8;
  }
  :nth-child(odd) {
    margin-top: 33px;
  }
`;
const Button = styled.button`
  border: 1px solid #909090;
  border-radius: 10px;
  height: 48px;
  width: 100px;
`;

export default {
  Button,
  Tbody,
  Table,
  Td,
  Th,
  THead,
  Tr,
};
