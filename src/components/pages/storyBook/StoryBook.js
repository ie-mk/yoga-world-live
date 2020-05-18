import React from 'react';
import ExpandableContainer from '../../foundation/expandableContainer';
import styled from 'styled-components';
import Button from '../../foundation/button/Button';
import HeroTitle from '../../foundation/typography/HeroTitle';
import BodyText from '../../foundation/typography/BodyText';

const Wrapper = styled.div``;

const StoryBook = () => (
  <Wrapper>
    <p>Component stories </p>
    <ExpandableContainer title="Navbar">TODO..</ExpandableContainer>
    <ExpandableContainer title="Buttons" isCollapsed={true}>
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
    <ExpandableContainer title="Typography" isCollapsed={false}>
      <p>COMPONENT: HeroTitle </p>
      <HeroTitle text="THE TECHNOLOGY SKILL PLATFORM" />
      <p>COMPONENT: BodyText </p>
      <BodyText>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et
      </BodyText>
    </ExpandableContainer>
    <ExpandableContainer title="Footer">TODO..</ExpandableContainer>
  </Wrapper>
);

export default StoryBook;
