import React from 'react';
import ExpandableContainer from '../../foundation/expandableContainer';
import styled from 'styled-components';
import Button from '../../foundation/button/Button';

const Wrapper = styled.div``;

const StoryBook = () => (
  <Wrapper>
    <p>Component stories </p>
    <ExpandableContainer title="Navbar">TODO..</ExpandableContainer>
    <ExpandableContainer title="Buttons" isCollapsed={false}>
      <Button type="primary" size="lg">
        VIEW COURSES
      </Button>
      <Button type="secondary" size="lg">
        GET IN TOUCH
      </Button>
    </ExpandableContainer>
    <ExpandableContainer title="Section">TODO..</ExpandableContainer>
    <ExpandableContainer title="Form">TODO..</ExpandableContainer>
    <ExpandableContainer title="Images">TODO..</ExpandableContainer>
    <ExpandableContainer title="Modal">TODO..</ExpandableContainer>
    <ExpandableContainer title="Typography">TODO..</ExpandableContainer>
    <ExpandableContainer title="Footer">TODO..</ExpandableContainer>
  </Wrapper>
);

export default StoryBook;
