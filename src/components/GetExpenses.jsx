import React, { useState } from "react";

//  STEP 1: Destructuring all needed budget states and setters as Props
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
}) {

  // Local states for form inputs
  const [amount, setAmount] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("foodBudget");

  //  STEP 2: Logic for handling expense submission
  const handleExpenseSubmit = () => {
    // Validation
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const expenseNum = Number(amount);

    //  STEP 3: Checking category and updating the parent state + localStorage
    if (expenseCategory === "foodBudget") {
      const updated = foodBudget - expenseNum;
      setFoodBudget(updated);
      localStorage.setItem("foodBudget", updated);
    } else if (expenseCategory === "transportBudget") {
      const updated = transportBudget - expenseNum;
      setTransportBudget(updated);
      localStorage.setItem("transportBudget", updated);
    } else if (expenseCategory === "billsBudget") {
      const updated = billsBudget - expenseNum;
      setBillsBudget(updated);
      localStorage.setItem("billsBudget", updated);
    } else if (expenseCategory === "entertainmentBudget") {
      const updated = entertainmentBudget - expenseNum;
      setEntertainmentBudget(updated);
      localStorage.setItem("entertainmentBudget", updated);
    } else if (expenseCategory === "healthBudget") {
      const updated = healthBudget - expenseNum;
      setHealthBudget(updated);
      localStorage.setItem("healthBudget", updated);
    } else if (expenseCategory === "otherBudget") {
      const updated = otherBudget - expenseNum;
      setOtherBudget(updated);
      localStorage.setItem("otherBudget", updated);
    } else if (expenseCategory === "SpecialGoalShowValue")  {
      const targetGoal = Number(localStorage.getItem("SpecialGoalShowValue") || 0);
      const updated = Number(goalValue || 0) + expenseNum; 

      if (updated <= targetGoal) {
        setGoalValue(updated);
        localStorage.setItem("SpecialGoalValue", updated);

      } else {
        alert("You cant add value, Because you achieve your goal");

        return;
      }
      

      
    }

    if (onAddTransaction) {
      onAddTransaction(expenseCategory, expenseNum);
    }
    
    //  STEP 4: Clear input field after success
    setAmount("");
    alert("Expense added successfully! ");
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