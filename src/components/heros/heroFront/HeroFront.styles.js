import styled from 'styled-components';
import { colors, fontSizeMap, spacing } from '../../../constants/styles';
import media from '../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
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
    ${'' /* // height: 100vh; */}
     ${'' /* margin-top: ${spacing.xxxl}; */}
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

const TextWrapper = styled.div`
  max-width: 500px;
  text-align: left;
  font-size: 28px;
  font-weight: 600;
  color: ${colors.text.secondary};
  ${media.aboveTablet`
    margin: auto;
  `};
  ${media.belowTablet`
    font-size: ${fontSizeMap.h5};
    margin: 100px ${spacing.xl} ${spacing.xxl};
  `};
`;
const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.xxxls};
  ${media.belowTablet`
    flex-direction: column;
    margin-top: 0;

  `};
`;

export default {
  Wrapper,
  Content,
  ButtonWrapper,
  TextWrapper,
  RowContainer,
};
