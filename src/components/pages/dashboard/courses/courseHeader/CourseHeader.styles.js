import styled from 'styled-components';
import { fontSizeMap, spacing, colors } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};
  //margin-bottom: ${spacing.xxl};
`;

const Content = styled.div`
  max-width: 1100px;
  z-index: 1;
  ${media.aboveTablet`
   padding-top: ${spacing.xxxxl};
  `}
`;

const HeaderWrapper = styled.div`
  // margin: 150px 50px 60px;
  text-align: center;
  ${media.aboveTablet`
    margin: auto;
  `}
  ${media.belowTabletLarge`
    margin: auto;
  `}
`;

const TextWrapper = styled.div`
  margin: 0 30px 40px;
  text-align: center;

  ${media.belowTabletLarge`
    margin: auto;
  `}
`;

export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  padding-left: ${spacing.sm};
  font-size: ${({ fontSize }) =>
    fontSizeMap[fontSize] ? fontSizeMap[fontSize] : fontSizeMap.textS};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.textMobile};
  `}
  color: ${({ color }) => (color ? colors[color] : colors.black)};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '')};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:${colors.background.violetprimary};
  align-items: center;
  width: 100%;
  padding: 20px;
  ${media.belowTabletLarge`
    padding: 10px;
    //height: 240px;
  `}
 
  }
`;

const StyledHeader = styled.text`
  font-size: ${fontSizeMap.h4};
  z-index: 1;
  font-weight: bold;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${media.belowTabletLarge`
    font-size: ${fontSizeMap.text};
  `}
`;

const ItemsWrapper = styled.div`
  margin-bottom: ${spacing.xls};
`;

export default {
  Wrapper,
  Content,
  HeaderWrapper,
  TextWrapper,
  Label,
  ContentWrapper,
  StyledHeader,
  ItemsWrapper,
};
