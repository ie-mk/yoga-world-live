import styled from 'styled-components';
import { colors, fontSizeMap, spacing } from '../../../constants/styles';
import media from '../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
  // position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg};
`;

const Content = styled.div`
  max-width: 1100px;
  z-index: 1;
  ${media.belowTablet`
     max-width: 100%;
     height: 100vh;
     margin-top: 60px;
  `};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${media.aboveTablet`
    justify-content: space-around;
    flex-direction: row;
  `};
`;

const HeaderWrapper = styled.div`
  margin: 150px 50px 20px;
  text-align: center;
  ${media.aboveTablet`
    margin: auto;
  `}
`;

const TextWrapper = styled.div`
  max-width: 500px;
  // margin: 0 30px 40px;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  color: ${colors.text.secondary};
  ${media.aboveTablet`
    margin: auto;
  `};
  ${media.belowTablet`
    font-size: 20px;
    margin: 0 30px 40px;
  `};
`;
const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  ${media.belowTablet`
    flex-direction: column;
  `};
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
  HeaderWrapper,
  TextWrapper,
  RowContainer,
};
