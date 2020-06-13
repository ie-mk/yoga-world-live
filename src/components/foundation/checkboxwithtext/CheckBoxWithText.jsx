import React from 'react';
import Styled from '../Admin.styles';
import { Field } from 'formik';

const CheckBoxWithText = ({ label, width, color, fontSize }) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.ItemContainer color={color}>
        <Field
          className="checkbox"
          name="employed"
          component="input"
          type="checkbox"
        />
        <Styled.Label fontSize={fontSize}>{label}</Styled.Label>
      </Styled.ItemContainer>
    </Styled.Wrapper>
  );
};

export default CheckBoxWithText;
