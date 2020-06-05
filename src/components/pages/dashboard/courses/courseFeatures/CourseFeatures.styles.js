import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};

  ${media.belowTabletLarge`
    height: auto;
  `}
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: ${spacing.md} 0;
  font-size: ${fontSizeMap.text};
  img {
    padding-right: ${spacing.lg};
  }
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
  margin: 250px 5% 250px 1%;
  padding-top: 150px;
  width: 100%;
  z-index: 1;

  ${media.belowTabletLarge`
    margin: 100px;
  `}
`;

export default {
  Wrapper,
  ItemContainer,
  ItemsWrapper,
  FootWrapper,
  Content,
};
