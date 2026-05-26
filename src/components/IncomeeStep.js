import React from 'react';

function IncomeeStep({income, setIncome, nextStep}) {
  
  return (
    <div>
      <h2>Let's start! What is your total income for this month?</h2>
      <div>
        <input type = "number" value = {income} onChange = {(e) =>setIncome(e.target.value)} placeholder = "Enter your income"/>

        <button onClick = {nextStep} disabled={!income || income <= 0}>Next</button>

      </div>


    </div>
  )
} export default IncomeeStep;