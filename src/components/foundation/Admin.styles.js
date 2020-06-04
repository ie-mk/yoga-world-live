import styled from 'styled-components';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
  dashboard,
} from '../../constants/styles';

export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  font-size: ${fontSizeMap.textS};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '')};
  margin-right: ${({ marginRight }) => (marginRight ? marginRight : '')};
`;

export const InputStyles = styled.div`
  width: 100%;
  display: ${({ displayLabelLeft }) => (displayLabelLeft ? 'flex' : '')};
  justify-content: ${({ displayLabelLeft }) =>
    displayLabelLeft ? 'space-between' : ''};
  color: ${colors.black};
  input {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#f0f0f7'};
    line-height: 40px;
    font-size: ${fontSizeMap.text};
    width: 100%;
    padding-left: ${spacing.sm};
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }

  input[type='checkbox'] {
    height: 42px;
    width: 42px;
    padding: 0;
  }

  .select {
    height: ${({ height }) => (height ? height : '40px')};
    font-size: ${fontSizeMap.text};
    width: ${({ dropdownWidth }) => (dropdownWidth ? dropdownWidth : '100%')};
    padding-left: ${spacing.sm};
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    text-align-last: center;
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : dashboard.dashboardBackground};
    opacity: 1;
  }
  .textarea {
    background-color: ${({ backgroundColor }) =>
      backgroundColor ? backgroundColor : '#f0f0f7'};
    height: ${({ height }) => (height ? height : 'auto')};
    font-size: ${fontSizeMap.text};
    width: 100%;
    padding-left: ${spacing.sm};
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 'auto')};
  display: ${({ displayLabelLeft }) => (displayLabelLeft ? 'flex' : '')};
  justify-content: ${({ displayLabelLeft }) =>
    displayLabelLeft ? 'center' : ''};
  color: ${colors.black};
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
