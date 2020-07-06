import styled from 'styled-components';
import { colors, spacing } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  font-weight: 500;
  border-bottom: 1px solid ${colors.primary};
  ${media.belowTabletLarge`
    padding: 5px;
  `}
`;

const ItemsContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  background: ${colors.background.violetsecondary};
  border-radius: 10px;
  div: last-child {
    // background: #ff0000;
    border-bottom: 0;
  }
`;

const Wrapper = styled.div``;

export default {
  ContentWrapper,
  ItemsContainer,
  Wrapper,
};
