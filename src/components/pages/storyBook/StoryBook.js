import React from 'react';
import ExpandableContainer from '../../foundation/expandableContainer';
import styled from 'styled-components';
import Button from '../../foundation/button/Button';

const Wrapper = styled.div``;

const StoryBook = () => (
  <Wrapper>
    <p>Component stories </p>
    <ExpandableContainer title="Buttons" isCollapsed={false}>
      <Button type="primary" size="lg">
        Primary
      </Button>
    </ExpandableContainer>
  </Wrapper>
);

export default StoryBook;
