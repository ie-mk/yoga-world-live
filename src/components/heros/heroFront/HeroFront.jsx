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
        src="/svg/Mobile_BG_V1.svg"
        height="50vh"
        width="100%"
        backgroundSize="contain"
        margin="150px 0 0"
        mediaConfig={{
          aboveTablet: {
            backgroundImage: 'url(/svg/Landing_Page_BG_Desktop.svg)',
            margin: 0,
          },
        }}
      />
      <Styled.Content>
        <Styled.RowContainer>
          <Styled.TextWrapper>
            THE SMARTER WAY TO LEARN ANYTHING FROM HOME
          </Styled.TextWrapper>
          <Styled.ButtonWrapper>
            <Button size="sm" type="primary" onClick={goToCourses}>
              VIEW COURSES
            </Button>
            <Button size="sm" type="secondary" onClick={getInTouch}>
              GET IN TOUCH
            </Button>
          </Styled.ButtonWrapper>
        </Styled.RowContainer>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default HeroFront;
