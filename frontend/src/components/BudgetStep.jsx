import React from 'react';

function BudgetStep({ 
  income, budget, setBudget, nextStep, 
  foodBudget, setFoodBudget, 
  transportBudget, setTransportBudget, 
  billsBudget, setBillsBudget, 
  entertainmentBudget, setEntertainmentBudget, 
  healthBudget, setHealthBudget, 
  otherBudget, setOtherBudget,
 
}) {

  // Convert inputs safely to numbers to calculate allocations
  const numIncome = Number(income) || 0;
  const numBudget = Number(budget) || 0;

  const totalAllocated = 
    Number(foodBudget || 0) + 
    Number(transportBudget || 0) + 
    Number(billsBudget || 0) + 
    Number(entertainmentBudget || 0) + 
    Number(healthBudget || 0) + 
    Number(otherBudget || 0);

  // Validation Flags
  const isOverBudget = totalAllocated > numBudget;
  const isOverIncome = numBudget > numIncome;

  return (
    // Standardized premium container box matching the previous steps
    <div className="w-full min-h-[650px] md:max-w-4xl p-6 md:p-12 bg-[#161920]/90 border border-[#232836] rounded-2xl shadow-2xl mx-auto flex flex-col justify-between">

      <button className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#1f242f] hover:bg-[#232936] border border-[#232836] text-gray-400 hover:text-[#00f2fe] transition duration-200 shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
     </button>
      
      <div>
        {/* STEPPER: Progress Indicator */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            ✓
          </div>
          <div className="flex-1 max-w-[60px] h-[2px] bg-emerald-500 mx-3"></div>
          <div className="w-9 h-9 rounded-full bg-[#00f2fe] text-[#0f1115] flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,242,254,0.4)]">
            2
          </div>
          <div className="flex-1 max-w-[60px] h-[2px] bg-[#232836] mx-3"></div>
          <div className="w-9 h-9 rounded-full bg-[#232936] text-[#64748b] flex items-center justify-center font-semibold text-sm">
            3
          </div>
        </div>

        {/* HEADER TITLE */}
        <h2 className="text-white text-xl md:text-2xl font-bold text-center mb-6 tracking-wide">
          Let's start! What is your total budget for this month?
        </h2>

        {/* INPUT: Total Budget Input Group */}
        <div className={`max-w-xl mx-auto relative flex items-center bg-[#0f1115] border rounded-xl px-5 py-4 mb-2 transition-all duration-300 ${isOverIncome ? 'border-red-500/50 focus-within:border-red-500' : 'border-slate-700 focus-within:border-[#00f2fe] focus-within:ring-1 focus-within:ring-[#00f2fe]/20'}`}>
          <span className="text-gray-500 font-bold text-xl mr-3 pointer-events-none">Rs.</span>
          <input 
            type="number" 
            placeholder="Enter your total budget" 
            value={budget} 
            max={income}
            onChange={(e) => setBudget(e.target.value)} 
            className="w-full bg-transparent text-white font-bold text-xl placeholder-gray-600 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
          />
        </div>

        {/* ERROR WARNING: If budget exceeds income */}
        <div className="h-6 text-center mb-6">
          {isOverIncome && (
            <p className="text-xs text-red-400 font-medium tracking-wide">
               Warning: Your total budget cannot exceed your monthly income (Rs. {numIncome.toLocaleString()})
            </p>
          )}
        </div>

        {/* SUBHEADER: Categories Breakdown Title */}
        <div className="flex justify-between items-center border-b border-[#232836] pb-2 mb-6">
          <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase">
            Break it down into categories
          </h3>
          <span className={`text-xs font-semibold ${isOverBudget ? 'text-red-400' : 'text-purple-300'}`}>
            Allocated: Rs. {totalAllocated.toLocaleString()} / Rs. {numBudget.toLocaleString()}
          </span>
        </div>

        {/* CATEGORIES GRID: Balanced 3-Column Layout for Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
          
          {/* Food Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400">Food & Dining</label>
            <input type="number" placeholder="eg: 10,000" value={foodBudget} max={budget} onChange={e => setFoodBudget(e.target.value)} 
              className="w-full bg-[#1a1625] border border-[#261f35] rounded-xl px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-[#00f2fe] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>

          {/* Transport Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400">Transport</label>
            <input type="number" placeholder="eg: 5,000" value={transportBudget} max={budget} onChange={e => setTransportBudget(e.target.value)} 
              className="w-full bg-[#1a1625] border border-[#261f35] rounded-xl px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-[#00f2fe] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>

          {/* Bills Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400">Bills & Utilities</label>
            <input type="number" placeholder="eg: 8,000" value={billsBudget} max={budget} onChange={e => setBillsBudget(e.target.value)} 
              className="w-full bg-[#1a1625] border border-[#261f35] rounded-xl px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-[#00f2fe] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>

          {/* Entertainment Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400">Entertainment</label>
            <input type="number" placeholder="eg: 3,000" value={entertainmentBudget} max={budget} onChange={e => setEntertainmentBudget(e.target.value)} 
              className="w-full bg-[#1a1625] border border-[#261f35] rounded-xl px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-[#00f2fe] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>

          {/* Health Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400">Health & Fitness</label>
            <input type="number" placeholder="eg: 2,000" value={healthBudget} max={budget} onChange={e => setHealthBudget(e.target.value)} 
              className="w-full bg-[#1a1625] border border-[#261f35] rounded-xl px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-[#00f2fe] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>

          {/* Other Input */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-400">Other Expenses</label>
            <input type="number" placeholder="eg: 4,000" value={otherBudget} max={budget} onChange={e => setOtherBudget(e.target.value)} 
              className="w-full bg-[#1a1625] border border-[#261f35] rounded-xl px-4 py-3 text-white placeholder-slate-700 focus:outline-none focus:border-[#00f2fe] transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
          </div>

        </div>

        {/* ERROR WARNING: If category sum exceeds total budget */}
        <div className="h-6 text-center mb-4">
          {isOverBudget && (
            <p className="text-xs text-red-400 font-medium tracking-wide">
               Warning: Category allocations exceed your Total Budget by Rs. {(totalAllocated - numBudget).toLocaleString()}
            </p>
          )}
        </div>
      </div>

      {/* FOOTER BUTTON: Action area pinned at the absolute bottom */}
      <div className="max-w-xl w-full mx-auto mt-4">
        <button
          onClick={nextStep}
          disabled={!budget || numBudget <= 0 || isOverIncome || isOverBudget}
          className="w-full py-4 px-6 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-bold text-base rounded-xl uppercase tracking-wider transition-all duration-200 disabled:from-[#232936] disabled:to-[#232936] disabled:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none enabled:hover:shadow-[0_10px_20px_rgba(0,242,254,0.2)] enabled:hover:-translate-y-0.5 enabled:active:translate-y-0"
        >
          Next Step
        </button>
      </div>

    </div>
  );
}

export default BudgetStep;