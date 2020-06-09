import React, { useState } from 'react';
import SectionCards from '../../../heros/sectionCards/SectionCards';
import Button from '../../../foundation/button/Button';
import Styled from './selectMembership.styles';

const SelectMembership = () => {
  return (
    <>
      <SectionCards title="Get Ready to Learn and Hire" />
      <Styled.ButtonWrapper>
        <Button size="lg" type="primary">
          JOIN
        </Button>
        <Button size="lg" type="secondary">
          JOIN
        </Button>
      </Styled.ButtonWrapper>
    </>
  );
};

export default SelectMembership;
