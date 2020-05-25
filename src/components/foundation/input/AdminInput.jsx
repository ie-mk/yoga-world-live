import React from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import {
  borderRadius,
  colors,
  fontSizeMap,
  spacing,
} from '../../../constants/styles';

export const Label = styled.div`
  padding-top: ${spacing.sm};
  padding-bottom: ${spacing.xxxS};
  font-size: ${fontSizeMap.h5};
`;

export const InputStyles = styled.div`
  width: 100%;
  padding-right: ${spacing.sm};
  input {
    line-height: 40px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .select {
    height: 40px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .textarea {
    height: 200px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid #909090;
    border-radius: ${borderRadius.sm};
    opacity: 1;
  }
  .countryUpdate-input1 {
    height: 40px;
    font-size: ${fontSizeMap.title3};
    width: 100%;
    padding-left: ${spacing.sm};
    color: black;
    border: 1px solid ${colors.primary};
    border-radius: ${borderRadius.xs};
  }
  .search-input:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? width : 'auto')};
`;

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
    <Wrapper width={width}>
      <Label>{label}</Label>
      <InputStyles>
        <Field
          className={classNameString}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </InputStyles>
    </Wrapper>
  );
};

export default AdminInput;
