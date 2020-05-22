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
  justify-content: center;
  align-items: center;
  padding: ${spacing.xl};
  margin-right: ${spacing.xl};
  background-color: ${({ highlighted }) => (highlighted ? 'grey' : 'white')};

  width: 250px;
  max-width: 250px;
  height: 200px;
  border: 1px solid #707070;
  border-radius: 10px;
  opacity: 1;
`;

export const TextContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  color: black;
`;

export const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2385d9;
  font-size: ${fontSizeMap.h2};
  padding: ${spacing.md};
`;

export const RowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  // flex-direction: row;
  padding-top: ${spacing.md};
`;
export const grayContainer = styled.label`
  color: ${colors.gray};
`;

export const NewContainer = styled.label`
  color: black;
  padding-right: ${spacing.md};
  margin-top: ${spacing.sm};
  margin-bottom: ${spacing.sm};
  font-size: ${fontSizeMap.text};
`;

export default {
  ItemWrapper,
  TextContainer,
  CountContainer,
  RowContainer,
  grayContainer,
  NewContainer,
};
