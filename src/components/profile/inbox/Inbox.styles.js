import styled from 'styled-components';
import media from '../../foundation/media';

import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../constants/styles';

export const ItemWrapper = styled.div`
  padding-left: ${spacing.xl};
  padding-right: ${spacing.xl};
  background: ${colors.background.violetsecondary};
  border-radius: ${spacing.sm};
  overflow-y: auto;
  height: 300px;

  div: last-child {
    border-bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${spacing.lg} 0;
  font-weight: 400;
  border-bottom: 1px solid ${colors.primary};
  ${media.belowTabletLarge`
    padding: ${spacing.xxxS};
  `}
`;

const RowContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  font-size: ${({ fontSize }) =>
    fontSizeMap[fontSize] ? fontSizeMap[fontSize] : '12px'};
`;
export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 20px;
  ${media.belowTabletLarge`
    width: 20px;
    height: 20px;
  `}
`;

const Wrapper = styled.div`
  flex: 1;
  flex-direction: column;
`;

const MessageBody = styled.div`
  padding: ${spacing.lg};
  border: 1px solid ${colors.white};
  border-radius: 10px;
  margin-left: 15%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: ${spacing.lg};
`;

export default {
  ItemWrapper,
  ContentWrapper,
  RowContainer,
  TextContainer,
  Image,
  Wrapper,
  MessageBody,
  ButtonWrapper,
};
