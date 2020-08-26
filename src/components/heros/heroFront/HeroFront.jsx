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
        src="/svg/Landing_Page_BG_Desktop.svg"
        height="350px"
        width="100%"
        margin="50px 0 0 0"
        // padding="50px"
        //  position="absolute"
        backgroundSize="contain"
        mediaConfig={{
          belowTabletLarge: {
            //backgroundImage: 'url("/img/mobile/Background.png")',
          },
        }}
      />
      <Styled.Content>
        {/* <Styled.HeaderWrapper>
          <HeroTitle text="YOGA WORLD PLATFORM" />
        </Styled.HeaderWrapper> */}
        <Styled.RowContainer>
          <Styled.TextWrapper>
            {/* <div> */}
            THE SMARTER WAY TO LEARN ANYTHING FROM HOME
            {/* </div> */}
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
