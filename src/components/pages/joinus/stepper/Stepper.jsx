import React, { useState } from 'react';
import Styled from './Stepper.styles';
import FlexContainer from '../../../foundation/FlexContainer';
import ContainerBase from '../../../foundation/ContainerBase';

const Stepper = ({ steps, activeStep, setActiveStep }) => {
  return (
    <ContainerBase marginTop="100px" display="flex" justifyContent="center">
      <FlexContainer width="85%" justifyContent="center">
        {steps.map((step, idx) => {
          const active = activeStep >= idx;
          return (
            <Styled.Step active={active} key={idx}>
              <Styled.Circle
                active={active}
                onClick={() => {
                  setActiveStep(idx);
                }}
              >
                {idx + 1}
              </Styled.Circle>
              <Styled.Label>{step.title}</Styled.Label>
            </Styled.Step>
          );
        })}
      </FlexContainer>
    </ContainerBase>
  );
};

export default Stepper;
