import React, { useState } from 'react';
import Stepper from './stepper/Stepper';
import { ContainerBase } from '../../foundation';
import SectionCards from '../../heros/sectionCards/SectionCards';
import SelectMembership from '../joinus/selectMembership/SelectMembership';

const steps = [
  { title: 'Select Your Membership' },
  { title: 'Your Details' },
  { title: 'Payment' },
  { title: 'Start Learning' },
];

const JoinUs = () => {
  const [activeStep, setActiveStep] = useState(0);

  const showPage1 = activeStep === 0;
  const showPage2 = activeStep === 1;
  const showPage3 = activeStep === 2;

  return (
    <>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <ContainerBase marginTop="100px">
        {showPage1 && <SelectMembership />}
        {showPage2 && <div>this is step 2</div>}
        {showPage3 && <div>this is step 3</div>}
      </ContainerBase>
    </>
  );
};

export default JoinUs;
