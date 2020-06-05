import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminTextArea = ({
  name,
  label,
  rows,
  cols,
  width,
  backgroundColor,
  placeholder,
  height,
}) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles backgroundColor={backgroundColor} height={height}>
        <Field
          className="textarea"
          name={name}
          component="textarea"
          rows={rows}
          cols={cols}
          placeholder={placeholder}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminTextArea;
