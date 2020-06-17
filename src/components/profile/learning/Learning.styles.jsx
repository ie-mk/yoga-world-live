import styled from 'styled-components';
import media from '../../foundation/media';

import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../../constants/styles';

export const Wrapper = styled.div``;

export const LearningWrapper = styled.div`
  padding: 0 90px 0 110px;
  ${media.belowTabletLarge`
    padding: 21px 30px;
  `}
`;
export const SkillSetItemWrapper = styled.div`
  padding: 18px 48px;
  margin: 0 15px 33px 0;
  border-radius: 100px;
  font-size: 32px;
  background-color: #2385d92b;
  ${media.belowTabletLarge`
  padding: 9px 37px;
  margin: 0 8px 18px 0;
  
  font-size: 16px;
  

`}
`;

export const SkillWrapper = styled.div`
  display: flex;
`;

export const SkillSetItemWrapper1 = styled.div`
  padding: 18px 30px;
  margin: 0 15px 33px 0;
  border-radius: 100px;
  font-size: 32px;
  background-color: #2385d92b;

  ${media.belowTabletLarge`
  padding: 9px 23px;
  font-size: 16px;
  margin: 0 9px 18px 0;

`}
`;

export const SkillSetItemWrapper2 = styled.div`
  padding: 18px 45px;
  margin: 0 15px 33px 0;
  border-radius: 100px;
  font-size: 32px;
  background-color: #2385d92b;
  width: ${({ width }) => (width ? width : '')};
  ${media.belowTabletLarge`
    padding:9px 23px;
   font-size:16px;
   width:250px;

`}
`;

export default {
  Wrapper,
  LearningWrapper,
  SkillSetItemWrapper,
  SkillSetItemWrapper1,
  SkillSetItemWrapper2,
  SkillWrapper,
};
