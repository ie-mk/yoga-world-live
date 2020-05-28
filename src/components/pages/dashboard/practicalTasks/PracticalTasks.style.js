import styled from 'styled-components';
import {
  spacing,
  fontSizeMap,
  colors,
  borderRadius,
  table,
  dashboard,
} from '../../../../constants/styles';

const DropdownWrapper = styled.div`
  align-items: center;
  flex: 1;
  display: flex;
  justify-content: center;
`;
const TableWrapper = styled.div`
  margin-left: ${spacing.xls};
  margin-right: ${spacing.xls};
  margin-top: ${spacing.xxxls};
`;
const Select = styled.select`
  width: 250px;
  height: 47px;
  border-radius: ${borderRadius.sm};
  text-align-last: center;
  background-color: ${dashboard.dashboardBackground};
`;
const Label = styled.label`
  margin-right: ${spacing.xls};
  margin-left: ${spacing.xxxls};
`;

export default {
  DropdownWrapper,
  TableWrapper,
  Select,
  Label,
};
