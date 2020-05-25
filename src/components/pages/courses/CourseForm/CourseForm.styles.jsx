import styled from 'styled-components';
//import customButoon from '@kiwicom/orbit-components/lib/Button';
import {
  colors,
  spacing,
  fontSizeMap,
  borderRadius,
} from '../../../../constants/styles';
const ValidationError = styled.div`
  position: absolute;
  padding: 2px;
  color: ${colors.danger};
  text-align: left;
`;
/*
export const CustomButton = styled(customButoon)`
  border-radius: ${borderRadius.md};
  background-color: ${colors.updateProfile.color};
  width: 200px;
`;
*/
export const Title = styled.div`
  padding-bottom: ${spacing.md};
  font-size: ${fontSizeMap.h5};
  padding-right: ${spacing.xxxxxl};
  ${({ isStrong }) => (isStrong ? 'font-weight: bold;' : '')};
  text-decoration: ${({ textDecor }) => (textDecor ? 'underline' : '')};
`;
export const InputStyles = styled.div`
  width: 100%;
  padding-right: ${spacing.sm};
  input {
    line-height: 40px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .select {
    height: 40px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .textarea {
    height: 200px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .countryUpdate-input1 {
    height: 40px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid ${colors.primary};
    border-radius: ${borderRadius.xs};
  }
  .search-input:focus {
    outline: none;
  }
`;

export const PhoneInputStyles = styled.div`
  padding-left: ${spacing.sm};
  border: 1px solid ${colors.primary};
  border-radius: ${borderRadius.xs};
  .PhoneInput {
    height: 40px;
  }
  .PhoneInputInput {
    height: 35px;
    border: none;
    font-size: ${fontSizeMap.title3};
  }
  .PhoneInputInput:focus {
    outline: none;
  }
`;
export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  font-size: ${fontSizeMap.h5};

 // color: ${colors.borders.disabled};
`;

export const NameContainer = styled.div`
  width: 50%;
`;

export const AddressContainer = styled.div`
  width: 40%;
`;
export const MidContainer = styled.div`
  width: 80%;
`;
export const Container = styled.div`
  width: 100%;
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-bottom: ${spacing.sm};
  align-items: center;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: ${spacing.sm};
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${spacing.xxxxl};
  flex-direction: row;
`;

export default {
  InputRow,
  ButtonContainer,
  InputStyles,
  NameContainer,
  Label,
  Container,
  AddressContainer,
  Title,
  ValidationError,
  PhoneInputStyles,
  // CustomButton,
  RowContainer,
  MidContainer,
};
