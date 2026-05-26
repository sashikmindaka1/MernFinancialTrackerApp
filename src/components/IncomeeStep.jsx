import React from 'react';
import './IncomeeStep.css'; // Importing the dedicated stylesheet

function IncomeeStep({ income, setIncome, nextStep }) {
  return (
    <div className="income-card">
      {/* Custom Stepper - Displaying the 3 steps at the top */}
      <div className="stepper-wrapper">
        <div className="step-circle active">1</div>
        <div className="step-line"></div>
        <div className="step-circle">2</div>
        <div className="step-line"></div>
        <div className="step-circle">3</div>
      </div>

      <h2 className="card-title">
        Let's start! What is your total income for this month?
      </h2>

      <div className="input-wrapper">
        {/* Static "Rs." prefix label pinned to the left side */}
        <span className="currency-symbol">Rs.</span>
        
        <input
          type="number"
          className="currency-input"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter your income"
        />
      </div>

      {/* The button automatically disables if input is empty, 0, or negative */}
      <button
        className="btn-next"
        onClick={nextStep}
        disabled={!income || income <= 0}
      >
        Next
      </button>
    </div>
  );
}

export default IncomeeStep;