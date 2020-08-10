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
  margin,
  height,
  mobileWidth,
  color,
  inputColor,
  border,
}) => {
  return (
    <Styled.Wrapper
      margin={margin}
      width={width}
      mobileWidth={mobileWidth}
      noMargin={noMargin}
    >
      <Styled.Label color={color} fontSize={fontSize}>
        {label}
      </Styled.Label>
      <Styled.InputStyles
        inputColor={inputColor}
        height={height}
        backgroundColor={backgroundColor}
        disabled={disabled}
        border={border}
      >
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
