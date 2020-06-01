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
  backgroundColor,
}) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.Label>{label}</Styled.Label>
      <Styled.InputStyles backgroundColor={backgroundColor}>
        <Field
          className={classNameString}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminInput;
