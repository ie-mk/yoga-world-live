import styled from 'styled-components';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  margin-top: 100px;
  ${media.belowTabletLarge`
     padding: 0 ${spacing.md};
  `}
`;

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

const StyledHeader = styled.text`
  font-size: ${fontSizeMap.h4};
  font-weight: 500;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

export default {
  Wrapper,
  ContentWrapper,
  StyledHeader,
  ItemsContainer,
};
