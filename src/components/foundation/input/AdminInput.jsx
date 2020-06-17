import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminInput = ({
  name,
  label,
  type,
  classNameString,
  placeholder,
  width,
  backgroundColor,
  disabled,
  fontSize,
  noMargin,
}) => {
  return (
    <Styled.Wrapper width={width} noMargin={noMargin}>
      <Styled.Label fontSize={fontSize}>{label}</Styled.Label>
      <Styled.InputStyles backgroundColor={backgroundColor} disabled={disabled}>
        <Field
          className={classNameString}
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
        />
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminInput;
