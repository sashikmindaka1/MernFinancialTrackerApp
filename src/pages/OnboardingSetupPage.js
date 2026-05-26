import React from 'react';
import { useState } from 'react';
import IncomeeStep from '../components/IncomeeStep';


function OnboardingSetupPage() {

  const [currentStep, setCurrentStep] = useState(1);

  const [income, setIncome] = useState("");

  function nextStep() {
    currentStep < 3 && setCurrentStep(currentStep + 1);
  }

  function renderStep() {
    switch(currentStep){
      case 1:
        return(
          <IncomeeStep
          income = {income}
          setIncome = {setIncome}
          nextStep = {nextStep}
          />
        )
      case 2:
        return(<h1>Step 2: budget</h1>);
     
    }
  }

  return (

    <div>

      {renderStep()}

    </div>

  )
}export default OnboardingSetupPage;