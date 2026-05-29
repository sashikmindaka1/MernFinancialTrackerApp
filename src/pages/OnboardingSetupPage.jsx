import React, { useState } from 'react';
import IncomeeStep from '../components/IncomeeStep'; 
import BudgetStep from '../components/BudgetStep';
import BudgetReview from '../components/BudgetReview';  


function OnboardingSetupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");
  const [foodBudget, setFoodBudget] = useState("");
  const [transportBudget, setTransportBudget] = useState("");
  const [billsBudget, setBillsBudget] = useState("");
  const [entertainmentBudget, setEntertainmentBudget] = useState("");
  const [healthBudget, setHealthBudget] = useState("");
  const [otherBudget, setOtherBudget] = useState("");

  function nextStep() {
    currentStep < 3 && setCurrentStep(currentStep + 1);
  }

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
            income={income}
            budget={budget}
            setBudget={setBudget}
            nextStep={nextStep}
            foodBudget={foodBudget}
            setFoodBudget={setFoodBudget}
            transportBudget={transportBudget}
            setTransportBudget={setTransportBudget}
            billsBudget={billsBudget}
            setBillsBudget={setBillsBudget}
            entertainmentBudget={entertainmentBudget}
            setEntertainmentBudget={setEntertainmentBudget}
            healthBudget={healthBudget}
            setHealthBudget={setHealthBudget}
            otherBudget={otherBudget}
            setOtherBudget={setOtherBudget}
          />
        );
      case 3:
        return (
          /* 🚨 Passing all collected states to ReviewStep for final summary display */
          <BudgetReview
            income={income}
            budget={budget}
            foodBudget={foodBudget}
            transportBudget={transportBudget}
            billsBudget={billsBudget}
            entertainmentBudget={entertainmentBudget}
            healthBudget={healthBudget}
            otherBudget={otherBudget}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="relative w-screen h-screen bg-[#0f1115] flex justify-center items-center overflow-hidden font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-5 filter blur-[140px] pointer-events-none -top-[100px] -left-[100px] bg-[#00f2fe]"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-5 filter blur-[140px] pointer-events-none -bottom-[100px] -right-[100px] bg-[#00ff66]"></div>
      {renderStep()}
    </div>
  );
}

export default OnboardingSetupPage;