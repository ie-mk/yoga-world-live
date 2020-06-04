import React from 'react';
import Styled from './ChooseLearningPath.styles';
import { useTranslation } from 'react-i18next';
import LearningPathCard from '../../../../foundation/learningPathCard/LearningPathCard';
import { ContainerBase } from '../../../../foundation';
import PathTitle from '../../../../foundation/typography/PathTitle';
import BodyText from '../../../../foundation/typography/BodyText';
import CenteredFlexContainer from '../../../../foundation/CenteredFlexContainer';
import SectionTitle from '../../../../foundation/typography/SectionTitle';
import { background, spacing } from '../../../../../constants/styles';

const ChooseLearningPath = () => {
  const { t } = useTranslation();

  return (
    <CenteredFlexContainer marginTop="200px">
      <SectionTitle text="Choose a Learning Path" />
      <BodyText>
        Learning paths guide you through exactly what you need to learn to build
        a solid foundation for a career or skillset
      </BodyText>
      <ContainerBase
        display="flex"
        justifyContent="space-between"
        mediaConfig={{
          belowDesktop: {
            padding: 0,
          },
        }}
        // mediaConfig={{
        //           aboveTablet: {
        //             'grid-template-columns': '1fr 1fr',
        //             width: '200px',
        //             margin: 'lg',
        //           },
        //           belowDesktop: {
        //             'grid-gap': spacing.xl,
        //             width: '100px',
        //             margin: 'sm'
        //           },
        //         }}
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
      </ContainerBase>
    </CenteredFlexContainer>
  );
};

export default ChooseLearningPath;
