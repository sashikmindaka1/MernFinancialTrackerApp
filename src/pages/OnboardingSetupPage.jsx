import React, { useState } from 'react';
import IncomeeStep from '../components/IncomeeStep'; 
import BudgetStep from '../components/BudgetStep';

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
          /* Passing all category budget states and setter functions as props */
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
          <div className="z-10 w-full max-w-md p-6 bg-[#161920] border border-[#232836] rounded-2xl shadow-2xl text-center">
            <h1 className="text-xl font-medium text-white">Step 3: Review Coming Soon...</h1>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    // 🌌 Full Screen Layout Wrapper styled with Tailwind CSS
    <div className="relative w-screen h-screen bg-[#0f1115] flex justify-center items-center overflow-hidden font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
      
      {/* 🔹 Ambient Neon Glows (Top Left Cyan Glow) */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-5 filter blur-[140px] pointer-events-none -top-[100px] -left-[100px] bg-[#00f2fe]"></div>
      
      {/* 🔹 Ambient Neon Glows (Bottom Right Neon Green Glow) */}
      <div className="absolute w-[600px] h-[600px] rounded-full opacity-5 filter blur-[140px] pointer-events-none -bottom-[100px] -right-[100px] bg-[#00ff66]"></div>

      {/* Renders the currently active onboarding step container */}
      {renderStep()}
    </div>
  );
}

export default OnboardingSetupPage;