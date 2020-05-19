import styled from 'styled-components';
import { spacing, colors } from '../../constants/styles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 315px);
  background: ${colors.background.gradient};
  padding: 0 ${spacing.lg};
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: ${spacing.lg};
`;

export default {
  Wrapper,
  Content,
};
