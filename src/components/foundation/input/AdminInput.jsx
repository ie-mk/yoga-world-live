import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminInput = ({
  name,
  label,
  type,
  value,
  classNameString,
  placeholder,
  width,
  onChange,
}) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles>
        <Field
          className={classNameString}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          ///  placeholder={placeholder}
          onChange={onChange}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminInput;
