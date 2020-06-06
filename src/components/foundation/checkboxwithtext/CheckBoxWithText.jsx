import React from 'react';
import Styled from '../Admin.styles';

const CheckBoxWithText = ({ label, width, color, fontSize }) => {
  return (
    <Styled.Wrapper width={width}>
      <Styled.ItemContainer color={color}>
        <img
          src="/svg/checkmark-circle-outline.svg"
          aria-hidden="true"
          alt="icon"
        />
        <Styled.Label fontSize={fontSize}>{label}</Styled.Label>
      </Styled.ItemContainer>
    </Styled.Wrapper>
  );
};

export default CheckBoxWithText;
