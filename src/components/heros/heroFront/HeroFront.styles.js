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
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  ${'' /* height: 80px; */}
  ${media.aboveTablet`
    justify-content: space-around;
   // margin-top: ${spacing.xxxl};
    flex-direction: row;
  `}
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
  margin: 0 30px 40px;
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  color: ${colors.text.secondary};
  ${media.aboveTablet`
    margin: auto;
  `};
`;
const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  align-items: left;
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
  HeaderWrapper,
  TextWrapper,
  RowContainer,
};
