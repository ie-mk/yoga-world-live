import styled from 'styled-components';
import { spacing } from '../../../../constants/styles';

export const MenuItem = styled.div`
  padding: ${spacing.sm};
  padding-bottom: ${spacing.md};
  box-shadow: ${({ active }) => (active ? '1px 2px 2px 1px gray' : '')};
  i {
    padding-right: ${spacing.md};
  }
`;

export const Label = styled.label`
  font-weight: bold;
`;

export default {
  MenuItem,
  Label,
};
