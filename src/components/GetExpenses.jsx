import React, { useState } from "react";

function GetExpenses({
  foodBudget, setFoodBudget,
  transportBudget, setTransportBudget,
  billsBudget, setBillsBudget,
  entertainmentBudget, setEntertainmentBudget,
  healthBudget, setHealthBudget,
  otherBudget, setOtherBudget,
  onAddTransaction,
  goalName, setGoalName,
  goalValue, setGoalValue,
  
  // Active remaining tracking budgets and state setters synchronized from parent layout
  currentFoodBudget, setCurrentFoodBudget,
  currentTransportBudget, setCurrentTransportBudget,
  currentBillsBudget, setCurrentBillsBudget,
  currentEntertainmentBudget, setCurrentEntertainmentBudget,
  currentHealthBudget, setCurrentHealthBudget,
  currentOtherBudget, setCurrentOtherBudget,

  // add expenses in bar chart
  addFoodBudget, setAddFoodBudget,
  addTransportBudget, setAddTransportBudget,
  addBillsBudget, setAddBillsBudget,
  addEntertainmentBudget, setAddEntertainmentBudget,
  addHealthBudget, setAddHealthBudget,
  addOtherBudget, setAddOtherBudget
}) {

  // Local states for management of form inputs
  const [amount, setAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("foodBudget");

  // Logic for validation and processing expense submission
  const handleExpenseSubmit = () => {
    // Input validation checks
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const expenseNum = Number(amount);

    // Evaluate designated category, compute deductions from active remaining balance, and persist to storage
    if (expenseCategory === "foodBudget") {
      const updated = Number(currentFoodBudget) - expenseNum;
      setCurrentFoodBudget(updated);
      localStorage.setItem("currentFoodBudget", updated);
      localStorage.setItem("addFoodBudget", expenseNum);
      
    } else if (expenseCategory === "transportBudget") {
      const updated = Number(currentTransportBudget) - expenseNum;
      setCurrentTransportBudget(updated);
      localStorage.setItem("currentTransportBudget", updated);
      localStorage.setItem("addTransportBudget", expenseNum);
      
    } else if (expenseCategory === "billsBudget") {
      const updated = Number(currentBillsBudget) - expenseNum;
      setCurrentBillsBudget(updated);
      localStorage.setItem("currentBillsBudget", updated);
      localStorage.setItem("addBillsBudget", expenseNum);
      
    } else if (expenseCategory === "entertainmentBudget") {
      const updated = Number(currentEntertainmentBudget) - expenseNum;
      setCurrentEntertainmentBudget(updated);
      localStorage.setItem("currentEntertainmentBudget", updated);
      localStorage.setItem("addEntertainmentBudget", expenseNum);
      
    } else if (expenseCategory === "healthBudget") {
      const updated = Number(currentHealthBudget) - expenseNum;
      setCurrentHealthBudget(updated);
      localStorage.setItem("currentHealthBudget", updated);
      localStorage.setItem("addHealthBudget", expenseNum);
      
    } else if (expenseCategory === "otherBudget") {
      const updated = Number(currentOtherBudget) - expenseNum;
      setCurrentOtherBudget(updated);
      localStorage.setItem("currentOtherBudget", updated);
      localStorage.setItem("addOtherBudget", expenseNum);
      
    } else if (expenseCategory === "SpecialGoalShowValue")  {
      const targetGoal = Number(localStorage.getItem("SpecialGoalShowValue") || 0);
      const updated = Number(goalValue || 0) + expenseNum; 

      // Verification to prevent progression past defined goal ceiling
      if (updated <= targetGoal) {
        setGoalValue(updated);
        localStorage.setItem("SpecialGoalValue", updated);
      } else {
        alert("You cant add value, Because you achieve your goal");
        return;
      }
    }

    // Pass metrics to parent tracker to update global transaction history log
    if (onAddTransaction) {
      onAddTransaction(expenseCategory, expenseNum);
    }
    
    // Reset local field states and notify user of operational success
    setAmount("");
    alert("Expense added successfully!");

    // Trigger full location reload to properly re-hydrate data models and refresh view configuration
    window.location.reload();
  };

  return (
    <div className="w-full p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-md">
      <h3 className="text-base font-bold mb-5 text-[#00f2fe] uppercase tracking-wider text-center">
          Record New Expense
      </h3>
      
      <div className="flex flex-col gap-5">
        {/* Amount Input */}
        <div>
          <label className="text-xs text-gray-400 block mb-1 font-medium">Expense Amount (Rs.)</label>
          <input 
            type="number" 
            placeholder="e.g. 1500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-[#1f242f] border border-[#232836] p-3 rounded-xl text-white focus:outline-none focus:border-[#00f2fe] transition"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="text-xs text-gray-400 block mb-1 font-medium">Select Category</label>
          <select 
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            className="w-full bg-[#1f242f] border border-[#232836] p-3 rounded-xl text-white focus:outline-none focus:border-[#00f2fe] transition cursor-pointer"
          >
            <option value="foodBudget">Food</option>
            <option value="transportBudget">Transport</option>
            <option value="billsBudget">Bills</option>
            <option value="entertainmentBudget">Entertainment</option>
            <option value="healthBudget">Health</option>
            <option value="otherBudget">Other</option>
            <option value="SpecialGoalShowValue">Special Goal</option>
          </select>
        </div>

        {/* Submit Button */}
        <button 
          onClick={handleExpenseSubmit}
          className="mt-2 w-full py-3 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-bold rounded-xl hover:opacity-90 transition shadow-lg uppercase text-xs tracking-wider"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default GetExpenses;