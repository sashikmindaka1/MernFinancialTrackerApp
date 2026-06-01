import React from 'react';

function IncomeeStep({ income, setIncome, nextStep }) {
  return (
    // Match the exact parent card layout and scale as the BudgetReview component
    <div className="w-full min-h-[550px] md:max-w-4xl p-8 md:p-16 bg-[#161920]/90 border border-[#232836] rounded-2xl shadow-2xl mx-auto flex flex-col justify-between">
      
      {/* Top Section */}
      <div>
        {/* Custom Stepper - Displaying the 3 steps at the top */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-9 h-9 rounded-full bg-[#00f2fe] text-[#0f1115] flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(0,242,254,0.4)]">
            1
          </div>
          <div className="flex-1 max-w-[60px] h-[2px] bg-[#232836] mx-3"></div>
          <div className="w-9 h-9 rounded-full bg-[#232936] text-[#64748b] flex items-center justify-center font-semibold text-sm">
            2
          </div>
          <div className="flex-1 max-w-[60px] h-[2px] bg-[#232936] mx-3"></div>
          <div className="w-9 h-9 rounded-full bg-[#232936] text-[#64748b] flex items-center justify-center font-semibold text-sm">
            3
          </div>
        </div>

        {/* Heading Typography */}
        <h2 className="text-white text-2xl md:text-3xl font-extrabold text-center mb-12 tracking-wide leading-relaxed max-w-2xl mx-auto">
          Let's start! What is your total income for this month?
        </h2>

        {/* Wrapper container for the input box */}
        <div className="relative max-w-xl mx-auto mb-12">
          {/* Static "Rs." prefix label pinned to the left side */}
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl pointer-events-none">
            Rs.
          </span>
          
          {/* Main Input Field - Styled to be large and sleek */}
          <input
            type="number"
            className="w-full bg-[#0f1115] border border-slate-700 rounded-xl py-5 pl-16 pr-6 text-white text-xl font-medium outline-none transition-all duration-300 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe]/20 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter your income"
          />
        </div>
      </div>

      {/* Next Step Button - Placed at the bottom to maintain the balance */}
      <div className="max-w-xl w-full mx-auto">
        <button
          className="w-full py-4 px-6 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-bold text-base rounded-xl uppercase tracking-wider transition-all duration-200 disabled:from-[#232936] disabled:to-[#232936] disabled:text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none enabled:hover:shadow-[0_10px_20px_rgba(0,242,254,0.2)] enabled:hover:-translate-y-0.5 enabled:active:translate-y-0"
          onClick={nextStep}
          disabled={!income || income <= 0}
        >
          Next Step
        </button>
      </div>

    </div>
  );
}

export default IncomeeStep;