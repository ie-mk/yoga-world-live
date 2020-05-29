import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminTextArea = ({
  name,
  label,
  value,
  rows,
  cols,
  width,
  placeholder,
  onChange,
}) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles>
        <Field
          className="textarea"
          name={name}
          component="textarea"
          rows={rows}
          cols={cols}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminTextArea;
