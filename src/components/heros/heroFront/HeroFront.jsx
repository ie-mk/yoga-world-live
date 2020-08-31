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

  var imgsrc = ' ';

  if (window.innerWidth < 756) {
    imgsrc = '/svg/Mobile_BG_V1.svg';
  } else {
    imgsrc = '/svg/Landing_Page_BG_Desktop.svg';
  }
  return (
    <Styled.Wrapper>
      {/* <ResponsiveImage
        src="/svg/Landing_Page_BG_Desktop.svg"
        height="350px"
        width="100%"
        margin="50px 0 0 0"
        backgroundSize="contain"
        mediaConfig={{
          belowTablet: {
            display: 'none',
          },
        }}
      /> */}
      <Styled.Content>
        <Styled.RowContainer>
          <Styled.TextWrapper>
            THE SMARTER WAY TO LEARN ANYTHING FROM HOME
          </Styled.TextWrapper>
          <ResponsiveImage
            src={imgsrc}
            height="250px"
            width="100%"
            margin="0 0 50px 0"
            backgroundSize="contain"
            mediaConfig={{
              aboveTablet: {
                //  display: 'none',
              },
            }}
          />
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
