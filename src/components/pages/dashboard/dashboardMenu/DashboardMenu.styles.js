import styled from 'styled-components';
import { spacing, background } from '../../../../constants/styles';

export const MenuItem = styled.div`
  padding: ${spacing.sm};
  padding-bottom: ${spacing.md};
  padding-left: ${spacing.xl};
  background-color: ${({ active }) =>
    active ? background.DashboardMenuItemBackgroundColor : ''};

  i {
    padding-right: ${spacing.md};
  }
`;

export const Label = styled.label`
  font-weight: bold;
  padding-left: ${spacing.md};
`;

export const Wrapper = styled.div``;

export default {
  Wrapper,
  MenuItem,
  Label,
};
