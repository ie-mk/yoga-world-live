import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../../constants/styles';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};
`;

const ItemContainer = styled.div`
  padding: ${spacing.md};
  font-size: ${fontSizeMap.text};
`;

const ItemsWrapper = styled.div`
  margin-bottom: ${spacing.xxl};
`;

const FootWrapper = styled.div`
  position: relative;
  font-size: ${fontSizeMap.h3};
  //justify-content: center;
  //align-items:center;
  text-align: center;
  margin-top: ${spacing.xxl};
`;

const Content = styled.div`
  max-width: 1100px;
  z-index: 1;
`;

export default {
  Wrapper,
  ItemContainer,
  ItemsWrapper,
  FootWrapper,
  Content,
};
