import React from "react";  
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import SpecialGoal from "../pages/SpecialGoal";

function BudgetReview({
  income, 
  budget, 
  foodBudget, 
  transportBudget, 
  billsBudget, 
  entertainmentBudget, 
  healthBudget, 
  otherBudget,
  goalValue

}) {

  // Fallback to 0 if props are passed as undefined or empty strings to prevent errors
  const numIncome = Number(income) || 0;
  const numBudget = Number(budget) || 0;
  
  const numFood = Number(foodBudget) || 0;
  const numTransport = Number(transportBudget) || 0;
  const numBills = Number(billsBudget) || 0;
  const numEntertainment = Number(entertainmentBudget) || 0;
  const numHealth = Number(healthBudget) || 0;
  const numOther = Number(otherBudget) || 0;
  const numSpecialGoal = Number(goalValue) || 0;

  // Financial calculations
  const saving = numIncome - numBudget;
  const totalAllocated = numFood + numTransport + numBills + numEntertainment + numHealth + numOther;
  const unAllocatedBudget = numBudget - totalAllocated;


  function handleFinishSetup(){
    <SpecialGoal />
  }




  return (
    // Main Container Box
    <div className="w-full min-h-[650px] md:max-w-4xl p-6 md:p-10 bg-[#161920]/90 border border-[#232836] rounded-2xl shadow-2xl mx-auto flex flex-col justify-between">
      
      <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1f242f] hover:bg-[#232936] border border-[#232836] text-gray-400 hover:text-[#00f2fe] transition duration-200 shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
     </button>
      
      
      <div>
        {/* TOP ROW: Core Metrics (Income, Budget, Savings) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-[#1f242f] border border-[#232836] p-5 rounded-xl text-center shadow-md">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Income</p>
            <p className="text-xl md:text-2xl font-bold text-white">Rs. {numIncome.toLocaleString()}</p>
          </div>

          <div className="bg-[#1f242f] border border-[#232836] p-5 rounded-xl text-center shadow-md">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Budget</p>
            <p className="text-xl md:text-2xl font-bold text-[#00f2fe]">Rs. {numBudget.toLocaleString()}</p>
          </div>

          <div className="bg-[#1f242f] border border-[#232836] p-5 rounded-xl text-center shadow-md">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Planned Savings</p>
            <p className="text-xl md:text-2xl font-bold text-emerald-400">Rs. {saving.toLocaleString()}</p>
          </div>
        </div>

        {/* SECTION HEADER: Category Breakdown & Unallocated Budget Alert */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#232836] pb-4 mb-6 gap-2">
          <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Category Breakdown</h3>
          {unAllocatedBudget > 0 && (
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-medium">
              Unallocated: Rs. {unAllocatedBudget.toLocaleString()} Remaining
            </span>
          )}
        </div>

        {/* BOTTOM GRID: Individual Expense Budgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {/* Food Budget */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm transition hover:border-purple-900/50">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Food Budget</p>
            <p className="text-lg font-bold text-indigo-400">Rs. {numFood.toLocaleString()}</p>
          </div>

          {/* Transport Budget */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm transition hover:border-purple-900/50">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Transport Budget</p>
            <p className="text-lg font-bold text-indigo-400">Rs. {numTransport.toLocaleString()}</p>
          </div>

          {/* Bills Budget */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm transition hover:border-purple-900/50">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Bills Budget</p>
            <p className="text-lg font-bold text-indigo-400">Rs. {numBills.toLocaleString()}</p>
          </div>

          {/* Entertainment Budget */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm transition hover:border-purple-900/50">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Entertainment Budget</p>
            <p className="text-lg font-bold text-indigo-400">Rs. {numEntertainment.toLocaleString()}</p>
          </div>

          {/* Health Budget */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm transition hover:border-purple-900/50">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Health Budget</p>
            <p className="text-lg font-bold text-indigo-400">Rs. {numHealth.toLocaleString()}</p>
          </div>

          {/* Other Budget */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm transition hover:border-purple-900/50">
            <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">Other Budget</p>
            <p className="text-lg font-bold text-indigo-400">Rs. {numOther.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* ACTION BUTTON: Styled submit button pinned to the bottom */}

      

      <button onClick={() => {
        localStorage.setItem("userIncome", income)
        localStorage.setItem("userBudget", budget)
        localStorage.setItem("foodBudget", numFood);
        localStorage.setItem("transportBudget", numTransport);
        localStorage.setItem("billsBudget", numBills);
        localStorage.setItem("entertainmentBudget", numEntertainment);
        localStorage.setItem("healthBudget", numHealth);
        localStorage.setItem("otherBudget", numOther);
        localStorage.setItem("SpecialGoalShowValue", numSpecialGoal);
  
        localStorage.setItem("isOnboarded", "true"); 

        alert("Saved Successfully! ");
        window.location.href = "/SpecialGoalsPage";
 

      }} className="w-full py-3 px-6 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:from-[#4facfe] hover:to-[#00f2fe] text-black font-bold rounded-xl transition duration-200 shadow-lg uppercase text-sm tracking-wider">
        Finish
      </button>

    </div>
  );
}

export default BudgetReview;