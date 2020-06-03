import React from 'react';
import { Field } from 'formik';
import Styled from '../Admin.styles';

const AdminDropDown = ({
  name,
  label,
  classNameString,
  placeholder,
  component,
  width,
  height,
  options,
  displayLabelLeft,
  dropdownWidth,
  marginLeft,
  marginRight,
  backgroundColor,
}) => {
  return (
    <Styled.Wrapper width={width} displayLabelLeft={displayLabelLeft}>
      <Styled.Label marginLeft={marginLeft} marginRight={marginRight}>
        {label}
      </Styled.Label>
      <Styled.InputStyles
        dropdownWidth={dropdownWidth}
        height={height}
        backgroundColor={backgroundColor}
      >
        <Field
          className={classNameString}
          name={name}
          component={component}
          placeholder={placeholder}
        >
          {options}
        </Field>
      </Styled.InputStyles>
    </Styled.Wrapper>
  );
};

export default AdminDropDown;
