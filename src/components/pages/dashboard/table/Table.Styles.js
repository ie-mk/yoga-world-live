import styled from 'styled-components';
import {
  spacing,
  fontSizeMap,
  colors,
  borderRadius,
} from '../../../../constants/styles';

const Table = styled.table`
  border-radius: 10px;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  color: #ffffff;
  font-size: 24px;
`;

const Td = styled.td`
  text-align: center;
  height: 92px;
  color: #333333;
  font-size: 24px;
  padding-left: 24px;
`;
const Th = styled.th`
  background-color: black;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 16px;
  padding-left: 24px;
  :last-child {
    padding-right: 24px;
  }
`;
const Tr = styled.tr`
  :nth-child(odd) {
    background-color: #e8e8e8;
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
  Table,
  Td,
  Th,
  Tr,
};
