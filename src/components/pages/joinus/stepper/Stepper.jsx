import React from 'react';
import Styled from './Stepper.styles';

const Stepper = ({ showNumber, activeStep, onSelect }) => {
  var steps = [
    { title: 'Step 1' },
    { title: 'Step 2' },
    { title: 'Step 3' },
    { title: 'Step 4' },
  ];
  const lastIndexOfSteps = steps.length - 1;

  console.log('----stepper--');
  return (
    <ul>
      <Styled.liLabel>1</Styled.liLabel>
      <Styled.liLabel>2</Styled.liLabel>
      <Styled.liLabel>3</Styled.liLabel>
      <Styled.liLabel class="active">4</Styled.liLabel>
      <Styled.liLabel>5</Styled.liLabel>
      <Styled.liLabel>6</Styled.liLabel>
      <Styled.liLabel>7</Styled.liLabel>
    </ul>
  );
  // {steps.map((step, index) => {
  //   return(
  // <React.Fragment key={index}>
  // <div className="stepper-item">
  //     <div className="stepper-item-outer" onClick={()=> onSelect.bind(null,index+1)}>
  //         <div className={`stepper-item-inner ${activeStep === (index+1) ? 'stepper-item-inner-active' : (index + 1) < activeStep ? 'stepper-item-inner-completed' : 'stepper-item-inner-future'}`}>  {showNumber && index + 1} </div>
  //     </div>
  //     <span className={`stepper-title ${activeStep === (index+1) ? 'stepper-title-active' : ''}`}> {step.title} </span>
  // </div>
  // {lastIndexOfSteps === index ? '' :  <div className="stepper-item-outer"> </div> }
  // </React.Fragment>
  //   )
  // })
  // }
};

export default Stepper;
