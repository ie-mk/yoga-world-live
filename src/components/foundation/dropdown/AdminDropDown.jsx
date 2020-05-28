import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminDropDown = ({
  name,
  label,
  value,
  classNameString,
  placeholder,
  component,
  width,
  height,
  onChange,
  options,
}) => {
  return (
    <Styled.Wrapper width={width} height={height}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles>
        <Field
          className={classNameString}
          name={name}
          component={component}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        >
          {options}
        </Field>
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminDropDown;
