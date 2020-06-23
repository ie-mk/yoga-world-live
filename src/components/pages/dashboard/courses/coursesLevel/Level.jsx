import React from 'react';
import Styled from './CoursesLevel.styles';
import ResponsiveImage from '../../../../foundation/ResponsiveImage'; //'../../foundation/ResponsiveImage';
import BodyText from '../../../../foundation/typography/BodyText';
import ContainerBase from '../../../../foundation/ContainerBase';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import Grid from '../../../../foundation/Grid';
import { fontSizeMap, spacing } from '../../../../../constants/styles';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import ProfileLearning from '../../../../foundation/profileLearning/ProfileLearning';

import {
  LEARNING_PATH_VALUES,
  LEARNING_PATH,
  LEVEL,
} from '../../../../../constants';

const Level = ({ courses, learningPathData, heading }) => {
  return (
    <Styled.Wrapper>
      <SectionTitle text={heading} />

      <Styled.TextWrapper>
        <BodyText>{learningPathData.descr}</BodyText>
      </Styled.TextWrapper>
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
        gridGap={spacing.xxxxl}
      >
        {courses &&
          courses.map((s, i) => {
            return (
              <ProfileLearning
                key={i}
                imageSrc={learningPathData.images[0]}
                title={s.title}
                subtitle={s.level}
                background="transparent linear-gradient(180deg, #293150 0%, #1E2540 100%) 0% 0% no-repeat padding-box"
              />
            );
          })}
      </Grid>
    </Styled.Wrapper>
  );
};

export default Level;
