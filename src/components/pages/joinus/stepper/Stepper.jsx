import React, { useState } from 'react';
import Styled from './Stepper.styles';
import FlexContainer from '../../../foundation/FlexContainer';
import ContainerBase from '../../../foundation/ContainerBase';

const steps = [
  { title: 'Step 1' },
  { title: 'Step 2' },
  { title: 'Step 3' },
  { title: 'Step 4' },
];

const Stepper = ({ showNumber, onSelect }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <ContainerBase marginTop="100px">
      <FlexContainer width="100%">
        {steps.map((step, idx) => {
          const active = activeStep >= idx;
          return (
            <Styled.Step active={active} key={idx}>
              <Styled.Circle active={active} onClick={() => setActiveStep(idx)}>
                {idx + 1}
              </Styled.Circle>
            </Styled.Step>
          );
        })}
      </FlexContainer>
    </ContainerBase>
  );
};

export default Stepper;
