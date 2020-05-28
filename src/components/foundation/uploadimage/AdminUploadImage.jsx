import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminUploadImage = ({ label, width }) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.UploadImageButton>
        <input type="file" />
        Upload Image
      </Styled.UploadImageButton>
    </Styled.Wrapper>
  );
};

export default AdminUploadImage;
