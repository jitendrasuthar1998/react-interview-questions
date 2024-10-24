import React, { useState } from 'react';
import './stepper.css';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <div className='stepper-container'>
        {/* 4 circle divs  */}
        <div className='circle'>1</div>
        <div
          className={`line ${
            currentStep == 1 || currentStep > 1 ? 'fillColor' : ''
          }`}
        ></div>
        <div className='circle'>2</div>
        <div
          className={`line ${
            currentStep == 2 || currentStep > 2 ? 'fillColor' : ''
          }`}
        ></div>
        <div className='circle'>3</div>
        <div
          className={`line ${
            currentStep == 3 || currentStep > 3 ? 'fillColor' : ''
          }`}
        ></div>
        <div className='circle'>4</div>
        {/* 3 linear div between them */}
      </div>

      <button
        onClick={() => handleNextStep()}
        style={{
          margin: 'auto auto',
          alignSelf: 'center',
          padding: '10px',
          backgroundColor: 'blue',
          color: 'white',
          borderRadius: '10px',
        }}
      >
        Next
      </button>
    </>
  );
};

export default Stepper;
