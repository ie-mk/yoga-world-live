import styled from 'styled-components';
import { spacing } from '../../../../constants/styles';

const BackButton = styled.div`
  display: flex;
  cursor: pointer;
  position: absolute;
  align-items: center;
  top: 10px;
  i {
    margin-right: ${spacing.sm};
  }
`;

export default {
  BackButton,
};
