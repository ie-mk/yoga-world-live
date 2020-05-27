import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
} from '../../../constants/styles';

export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  font-size: ${fontSizeMap.h5};
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

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 'auto')};
`;

const AdminUploadImage = ({ label, width }) => {
  return (
    <Wrapper width={width}>
      <Label>{label}</Label>
      <UploadImageButton>
        <input type="file" />
        Upload Image
      </UploadImageButton>
    </Wrapper>
  );
};

export default AdminUploadImage;
