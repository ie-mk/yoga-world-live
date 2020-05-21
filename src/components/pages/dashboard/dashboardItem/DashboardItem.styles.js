import styled from 'styled-components';
import {
  colors,
  spacing,
  marginMap,
  borderRadius,
  fontSizeMap,
} from '../../../../constants/styles';

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  padding: ${spacing.xxl};
  background-color: ${({ highlighted }) => (highlighted ? 'grey' : 'white')};
  box-shadow: ${({ highlighted, hover }) =>
    highlighted || hover ? '0 0 15px rgba(0, 0, 0, 0.8)' : ''};
  top: 100px;
  left: 50px;
  width: 250px;
  height: 200px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 10px;
  opacity: 1;
`;

export const TextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: black;
  padding-right: ${spacing.md};
`;
export const CountContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: ${colors.blue};
  font-size: ${fontSizeMap.h3};
`;
export const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-top: ${spacing.md};
`;

export default {
  ItemWrapper,
  TextContainer,
  CountContainer,
  RowContainer,
};
