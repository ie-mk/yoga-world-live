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
  onChange,
  backgroundColor,
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
          value={value}
          onChange={onChange}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminTextArea;
