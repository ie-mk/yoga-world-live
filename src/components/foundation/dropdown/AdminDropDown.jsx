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
