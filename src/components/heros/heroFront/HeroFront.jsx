import React from 'react';
import Styled from './HeroFront.styles';
import ResponsiveImage from '../../foundation/ResponsiveImage';
import HeroTitle from '../../foundation/typography/HeroTitle';
import BodyText from '../../foundation/typography/BodyText';
import Button from '../../foundation/button/Button';
import { useRouter } from 'next/router';

const HeroFront = () => {
  const router = useRouter();
  const getInTouch = () => {
    router.push(
      {
        pathname: '/getInTouch',
      },
      '/getInTouch',
    );
  };

  const goToCourses = () => {
    router.push(
      {
        pathname: '/courses',
      },
      '/courses',
    );
  };

  return (
    <Styled.Wrapper>
      <ResponsiveImage
        src=""
        height="100vh"
        width="100%"
        position="absolute"
        backgroundSize="contain"
        mediaConfig={{
          belowTabletLarge: {
            //backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        <Styled.HeaderWrapper>
          <HeroTitle text="YOGA WORLD PLATFORM" />
        </Styled.HeaderWrapper>
        <Styled.TextWrapper>
          <div>THE SMARTER WAY TO LEARN ANYTHING FROM HOME</div>
        </Styled.TextWrapper>
        <Styled.ButtonWrapper>
          <Button size="lg" type="primary" onClick={goToCourses}>
            COURSES
          </Button>
          <Button size="lg" type="secondary" onClick={getInTouch}>
            GET IN TOUCH
          </Button>
        </Styled.ButtonWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
