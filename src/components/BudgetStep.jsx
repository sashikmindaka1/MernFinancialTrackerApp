import React from 'react';
import IncomeeStep from './IncomeeStep';

function BudgetStep({ budget, setBudget, nextStep }) {

  return (
    <div className="budget-card">
      {/* Custom Stepper - Displaying the 3 steps at the top */}
      <div className="stepper-wrapper">
        <div className="step-circle completed">1</div>
        <div className="step-line"></div>
        <div className="step-circle active">2</div>
        <div className="step-line"></div>
        <div className="step-circle">3</div>
      </div>

      <h2 className="card-title">
        Let's start! What is your total budget for this month?
      </h2>

      <div className="input-wrapper">
        {/* Static "Rs." prefix label pinned to the left side */}
        <span className="currency-symbol">Rs.</span>
      </div>  

      <input type = "number" 
             placeholder='Enter your budget' 
             value={budget} 
             onChange={(e) => 
             setBudget(e.target.value)} 
             className='currency-input' />


      <button
        className="btn-next"
        onclick = {nextStep}
        disabled={ budget > IncomeeStep || budget<=0}>
        next
      </button>










    </div>
    
  )


  
} export default BudgetStep;