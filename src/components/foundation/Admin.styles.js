import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
} from '../../constants/styles';

export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  font-size: ${fontSizeMap.h5};
`;

export const InputStyles = styled.div`
  width: 100%;
  padding-right: ${spacing.sm};
  input {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#f0f0f7'};
    line-height: 40px;
    font-size: ${fontSizeMap.text};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .select {
    height: 40px;
    font-size: ${fontSizeMap.text};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .textarea {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#f0f0f7'};
    // height: 200px;
    font-size: ${fontSizeMap.text};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 'auto')};
`;

const UploadImageButton = styled.label`
    width: 100%;
   // padding-right: ${spacing.sm};
    height: 40px;
    border: 1px solid #909090;
    font-size: ${fontSizeMap.text};
    color:${colors.black};
    border-radius: ${borderRadius.sm};
    background-color: #f0f0f7;
    opacity: 1;
    display:flex;
    justify-content: center;
    align-items:center;  
    cursor: pointer;

input[type="file"] {
    display: none;
}
`;

export default {
  InputStyles,
  Label,
  Wrapper,
  UploadImageButton,
};
