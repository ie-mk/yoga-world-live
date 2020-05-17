import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'space-between'};
  width: ${({ width }) => width};
`;

const ButtonGroup = ({ width, children, justifyContent }) => {
  return (
    <Wrapper className="button-group" {...{ width, justifyContent }}>
      {children}
    </Wrapper>
  );
};

export default ButtonGroup;
