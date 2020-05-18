import styled from 'styled-components';
import customButoon from '@kiwicom/orbit-components/lib/Button';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
  spacing,
} from '../../constants/styles';

const Wrapper = styled.div``;

export const CustomButton = styled(customButoon)`
  border-radius: ${borderRadius.md};
  background-color: ${colors.secondary};
  width: 100%;
  margin-top: ${spacing.md};
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${spacing.md};
`;
const CleanWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.md};
  border-bottom: 1px dashed ${colors.primary};
`;
const TotalWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-top: ${spacing.md};
  margin-bottom: ${spacing.md};
`;
export const PriceRange = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.xl};
  align-items: center;
`;

export const PriceContainer = styled.div`
  border: 1px solid ${colors.borders.disabled};
  width: 100%;
  height: 50px;
  border-radius: ${borderRadius.sm};
  overflow: hidden;
  display: flex;
  flex-direction: row;
`;
export const TextContainer = styled.div`
  padding: ${spacing.xS};
  width: ${({ width }) => (width ? width : '')};
  border-right: ${({ disabled }) =>
    disabled ? `1px solid ${colors.borders.disabled}` : ''};
`;
export const Select = styled.select`
  width: 100%;
  border: none;
  background-color: transparent;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export default {
  Wrapper,
  ContentWrapper,
  CustomButton,
  CleanWrapper,
  TotalWrapper,
  PriceContainer,
  PriceRange,
  TextContainer,
  Select,
  Label,
};
