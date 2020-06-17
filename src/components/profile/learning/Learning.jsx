import React from 'react';
import { useTranslation } from 'react-i18next';
import ProfileLearning from '../../foundation/profileLearning/ProfileLearning';
import BodyText from '../../foundation/typography/BodyText';
import ContainerBase from '../../foundation/ContainerBase';
import SectionTitle from '../../foundation/typography/SectionTitle';
import { background, spacing } from '../../../constants/styles';
import Grid from '../../foundation/Grid';
import Styled from './Learning.styles';
import CardTitle from '../../foundation/typography/CardTitle';
import Text24 from '../../foundation/typography/Text24';
import CustomCardTitle from '../customCardTitles/CustomCardTitle';

const ChooseLearningPath = () => {
  const { t } = useTranslation();

  return (
    <ContainerBase
      marginTop="xxxl"
      mediaConfig={{
        belowTabletLarge: {
          margin: '30px 0 0 0',
        },
      }}
    >
      <Styled.LearningWrapper>
        <CustomCardTitle
          margin="0 0 44px 0"
          mobileMargin="0 0 22px 0"
          text="Completed Courses"
        />
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xl}
        >
          <ProfileLearning
            imageSrc="/svg/frontend.svg"
            title="Course Name"
            subtitle="category"
            margin="0 0 54px 0"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
          <ProfileLearning
            imageSrc="/svg/backend.svg"
            title="Course Name"
            subtitle="category"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
          <ProfileLearning
            imageSrc="/svg/design.svg"
            title="Course Name"
            subtitle="category"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
        </Grid>
        <CustomCardTitle
          margin="106px 0 44px 0"
          mobileMargin="51px 0 22px 0"
          text="Courses you are taking"
        />
        <Grid
          columns="1fr"
          mediaConfig={{
            aboveTabletLarge: {
              'grid-template-columns': '1fr 1fr 1fr',
            },
            belowDesktop: {
              'grid-gap': spacing.xl,
            },
          }}
          gridGap={spacing.xl}
        >
          <ProfileLearning
            imageSrc="/svg/frontend.svg"
            title="Course Name"
            subtitle="category"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
          <ProfileLearning
            imageSrc="/svg/backend.svg"
            title="Course Name"
            subtitle="category"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
          <ProfileLearning
            imageSrc="/svg/design.svg"
            title="Course Name"
            subtitle="category"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
          <ProfileLearning
            imageSrc="/svg/frontend.svg"
            title="Course Name"
            subtitle="category"
            background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
          />
        </Grid>
        <CustomCardTitle
          margin="106px 0 53px 0"
          mobileMargin="51px 0 22px 0"
          text="Your skillset"
        />
        <Styled.DesktopView>
          <Styled.SkillSetItemWrapper>HTML</Styled.SkillSetItemWrapper>
          <Styled.SkillSetItemWrapper>CSS</Styled.SkillSetItemWrapper>
          <Styled.SkillSetItemWrapper>JAVA</Styled.SkillSetItemWrapper>
          <Styled.SkillSetItemWrapper1>
            Responsive Design
          </Styled.SkillSetItemWrapper1>
        </Styled.DesktopView>
        <Styled.MobileView>
          <Styled.SkillSetItemMobileWrapper>
            HTML
          </Styled.SkillSetItemMobileWrapper>
          <Styled.SkillSetItemMobileWrapper>
            CSS
          </Styled.SkillSetItemMobileWrapper>
        </Styled.MobileView>
        <Styled.MobileView>
          <Styled.SkillSetItemMobileWrapper>
            JAVA
          </Styled.SkillSetItemMobileWrapper>
        </Styled.MobileView>
        <Styled.MobileView>
          <Styled.SkillSetItemWrapper1>
            Responsive Design
          </Styled.SkillSetItemWrapper1>
        </Styled.MobileView>
        <Styled.SkillSetItemWrapper2 width="500px">
          Frontend Development
        </Styled.SkillSetItemWrapper2>
      </Styled.LearningWrapper>
    </ContainerBase>
  );
};

export default ChooseLearningPath;
