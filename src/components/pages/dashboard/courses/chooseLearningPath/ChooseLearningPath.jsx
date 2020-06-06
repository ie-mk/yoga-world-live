import React from 'react';
import { useTranslation } from 'react-i18next';
import LearningPathCard from '../../../../foundation/learningPathCard/LearningPathCard';
import BodyText from '../../../../foundation/typography/BodyText';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import { background, spacing } from '../../../../../constants/styles';
import Grid from '../../../../foundation/Grid';

const ChooseLearningPath = () => {
  const { t } = useTranslation();

  return (
    <CenteredFlexContainer marginTop="xxl">
      <SectionTitle text="Choose a Learning Path" />
      <BodyText>
        Learning paths guide you through exactly what you need to learn to build
        a solid foundation for a career or skillset
      </BodyText>
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
        <LearningPathCard
          imageSrc="/svg/frontend.svg"
          title="Frontend development"
        />
        <LearningPathCard
          imageSrc="/svg/backend.svg"
          title="Backend development"
        />
        <LearningPathCard imageSrc="/svg/design.svg" title="Design" />
      </Grid>
    </CenteredFlexContainer>
  );
};

export default ChooseLearningPath;
