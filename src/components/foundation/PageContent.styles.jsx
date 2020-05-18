import styled from 'styled-components';
import { paddingMap, colors } from '../constants/styles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 315px);
  background: ${colors.background.gradient};
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: ${paddingMap.lg};
`;

export default {
  Wrapper,
  Content,
};
