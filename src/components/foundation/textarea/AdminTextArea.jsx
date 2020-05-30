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
  backgroundColor,
}) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles backgroundColor={backgroundColor}>
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
