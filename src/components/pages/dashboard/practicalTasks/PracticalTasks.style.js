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
  flex: 1;
  display: flex;
  justify-content: center;
`;
const TableWrapper = styled.div`
  margin-left: ${spacing.xls};
  margin-right: ${spacing.xls};
  margin-top: ${spacing.xxxls};
`;
const DropdownItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Label = styled.label`
  margin-right: ${spacing.xls};
  margin-left: ${spacing.xxxls};
`;

export default {
  DropdownWrapper,
  DropdownItemWrapper,
  TableWrapper,
  Label,
};
