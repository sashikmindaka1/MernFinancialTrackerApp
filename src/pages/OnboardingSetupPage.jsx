import React, { useState } from 'react';
import IncomeeStep from '../components/IncomeeStep'; 
import '../components/OnboardingSetupPage.css'; 
import BudgetStep from '../components/BudgetStep';

function OnboardingSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");

  // Function to transition to the next step
  function nextStep() {
    currentStep < 3 && setCurrentStep(currentStep + 1);
  }

  // Conditional renderer to display the component corresponding to the active step
  function renderStep() {
    switch(currentStep) {
      case 1:
        return (
          <IncomeeStep
            income={income}
            setIncome={setIncome}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <BudgetStep
            budget={budget}
            setBudget={setBudget}
            nextStep={nextStep}
          />
        );
      case 3:
        return <h1 className="card-title">Step 3: Review Coming Soon...</h1>;
      default:
        return null;
    }
  }

  return (
    <div className="onboarding-container">
      {/* Ambient neon glows to add depth to the dark layout background */}
      <div className="neon-glow glow-top"></div>
      <div className="neon-glow glow-bottom"></div>

      {/* Renders the currently active onboarding step container */}
      {renderStep()}
    </div>
  );
}

export default OnboardingSetupPage;