import styled from 'styled-components';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  margin-top: 100px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background:${colors.background.violetprimary};
  width: 100%;
  padding: 20px;
  ${media.belowTabletLarge`
    padding: 5px;
  `}
  }
`;

const StyledHeader = styled.text`
  font-size: ${fontSizeMap.h4};
  font-weight: bold;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

export default {
  Wrapper,
  ContentWrapper,
  StyledHeader,
};
