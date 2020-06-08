import React from 'react';
import Styled from './Stepper.styles';
import FlexContainer from '../../../foundation/FlexContainer';
import ContainerBase from '../../../foundation/ContainerBase';
import CenteredFlexContainer from '../../../foundation/CenteredFlexContainer';

const steps = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Step 3' },
  { title: 'Step 4' },
];

const Stepper = ({ showNumber, activeStep, onSelect }) => {
  return (
    <ContainerBase marginTop="100px">
      <FlexContainer width="100%">
        {steps.map((step, idx) => {
          return (
            <Styled.Step key={idx}>
              <Styled.Circle>{idx + 1}</Styled.Circle>
            </Styled.Step>
          );
        })}
      </FlexContainer>
    </ContainerBase>
  );
};

export default Stepper;
