import styled from 'styled-components';
import {
  colors,
  spacing,
  marginMap,
  borderRadius,
  fontSizeMap,
} from '../../../../constants/styles';

export const ItemWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${spacing.xl};
  margin-right: ${spacing.xl};
  background-color: ${({ highlighted }) => (highlighted ? 'grey' : 'white')};
  flex-direction: column;
  width: 30%;
  padding: ${spacing.xxl};
  //max-width: 30%;
  height: 320px;
  border: 1px solid #707070;
  border-radius: 10px;
  opacity: 1;
`;

export const TitleContainer = styled.div`
  // flex: 1;
  // display: flex;
  justify-content: center;
  color: black;
  font-size: ${fontSizeMap.h4};
  //padding-top:46px;
  //padding-bottom: 24px;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
 // align-items: center;
  color: #2385d9;
  font-size: 100px;
  //padding: ${spacing.md};
  //padding-right: 129px;
 // padding-left: 129px;
`;

export const RowContainer = styled.div`
  ${({ renderEmpty }) => (renderEmpty ? 'height: 42px;' : '')}
  display: flex;
  justify-content: space-between;
  padding-top: ${spacing.md};
  flex-direction:row;
  //margin-top: ${spacing.sm};
  //margin-bottom: ${spacing.sm};
  width: 100%;
  ${({ renderEmpty }) => (renderEmpty ? 'height: 42px;' : '')}
`;
export const grayContainer = styled.span`
  color: ${colors.gray};
  font-size: ${fontSizeMap.text};
`;

export const NewContainer = styled.span`
  color: black;
  font-size: ${fontSizeMap.h4};
  font-weight: bold;
`;

export default {
  ItemWrapper,
  TitleContainer,
  CountContainer,
  RowContainer,
  grayContainer,
  NewContainer,
};
