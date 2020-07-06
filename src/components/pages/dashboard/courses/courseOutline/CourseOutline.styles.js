import styled from 'styled-components';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const StyledHeader = styled.text`
  font-size: ${fontSizeMap.h4};
  font-weight: 500;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

const Wrapper = styled.div`
  margin-top: 100px;
  ${media.belowTabletLarge`
     padding: 0 ${spacing.md};
  `}
`;

export default {
  StyledHeader,
  Wrapper,
};
