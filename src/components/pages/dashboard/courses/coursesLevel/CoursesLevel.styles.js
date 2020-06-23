import styled from 'styled-components';
import { fontSizeMap, spacing } from '../../../../../constants/styles';
import media from '../../../../foundation/media';

const Wrapper = styled.div`
  height: 100vh;
  // position: relative;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${spacing.lg} 50px;
  margin-bottom: ${spacing.xxxxxxl};
`;

const Content = styled.div`
  max-width: 800px;
  z-index: 1;
  padding-top: ${spacing.xxxl};
`;

const HeaderWrapper = styled.div`
  margin: 150px 50px 60px;
  text-align: center;

  ${media.aboveTablet`
    margin: auto;
  `}
`;

const TextWrapper = styled.div`
  margin: 0 30px 40px;
  text-align: center;

  ${media.aboveTablet`
    margin-left: auto;
    margin-right: auto;

  `}
`;

export default {
  Wrapper,
  Content,
  HeaderWrapper,
  TextWrapper,
};
