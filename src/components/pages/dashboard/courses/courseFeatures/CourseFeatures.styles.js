import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../../constants/styles';

//export const Wrapper = styled.div``;

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  margin-top:${spacing.xxl};
 // display: flex;
  //justify-content: center;
  //align-items: center;
  //padding: 0 ${spacing.lg};
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

export default {
  Wrapper,
  ItemContainer,
  ItemsWrapper,
  FootWrapper,
};
