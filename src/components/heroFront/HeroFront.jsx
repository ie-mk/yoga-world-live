import React from 'react';
import Styled from './HeroFront.styles';
import ResponsiveImage from '../foundation/ResponsiveImage';
import HeroTitle from '../foundation/typography/HeroTitle';
import BodyText from '../foundation/typography/BodyText';
import Button from '../foundation/button/Button';

const HeroFront = () => {
  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src="/img/Background.png"
        height="100vh"
        width="100%"
        position="absolute"
        zIndex="-1"
      />
      <Styled.Content>
        <HeroTitle text="THE TECHNOLOGY SKILL PLATFORM" />
        <BodyText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
          et
        </BodyText>
        <Styled.ButtonWrapper>
          <Button size="lg" type="primary">
            VIEW COURSES
          </Button>
          <Button size="lg" type="secondary">
            GET IN TOUCH
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
