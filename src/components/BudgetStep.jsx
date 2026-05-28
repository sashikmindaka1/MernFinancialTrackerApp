import React from 'react';

function BudgetStep({ 
  income, budget, setBudget, nextStep, 
  foodBudget, setFoodBudget, 
  transportBudget, setTransportBudget, 
  billsBudget, setBillsBudget, 
  entertainmentBudget, setEntertainmentBudget, 
  healthBudget, setHealthBudget, 
  otherBudget, setOtherBudget 
}) {

  return (
    /* 💳 Main Budget Card Container - Expanded width and removed max-height to avoid internal scrolling */
    <div className="z-10 w-full max-w-2xl p-8 mx-4 bg-[#161920]/90 backdrop-blur-md border border-[#232836] rounded-2xl shadow-2xl transition-all duration-300">
      
      {/* 🔢 Custom Stepper */}
      <div className="flex items-center justify-between mb-8 max-w-md mx-auto">
        <div className="flex items-center justify-center w-8 h-8 font-semibold text-white bg-green-500 rounded-full shadow-lg shadow-green-500/30">1</div>
        <div className="flex-1 h-0.5 bg-green-500 mx-2"></div>
        <div className="flex items-center justify-center w-8 h-8 font-semibold text-white bg-[#00f2fe] rounded-full shadow-lg shadow-cyan-500/30">2</div>
        <div className="flex-1 h-0.5 bg-[#232836] mx-2"></div>
        <div className="flex items-center justify-center w-8 h-8 font-semibold text-gray-500 bg-[#1f242f] border border-[#232836] rounded-full">3</div>
      </div>

      {/* 🏷️ Title */}
      <h2 className="text-2xl font-semibold text-white text-center mb-6 tracking-wide">
        Let's start! What is your total budget for this month?
      </h2>

      {/* 💵 Total Budget Input Group - Centered and highlighted display */}
      <div className="max-w-md mx-auto relative flex items-center bg-[#1f242f] border border-[#232836] rounded-xl px-5 py-3.5 mb-8 focus-within:border-[#00f2fe] focus-within:shadow-[0_0_15px_rgba(0,242,254,0.1)] transition-all duration-200">
        <span className="text-gray-400 font-bold text-xl mr-3">Rs.</span>
        <input 
          type="number" 
          placeholder='Enter your total budget' 
          value={budget} 
          max={income}
          onChange={(e) => setBudget(e.target.value)} 
          className="w-full bg-transparent text-white font-bold text-xl placeholder-gray-600 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
        />
      </div>   

      {/* 📊 Categories Breakdown Title */}
      <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 pb-2 border-b border-[#232836] flex items-center gap-2">
        <span>📊</span> Break it down into categories
      </h3>

      {/* 🗂️ Categories Inputs Grid - Splits into 2 columns on desktop layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        
        {/* Food Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 flex items-center gap-1.5">🍔 Food & Dining</label>
          <input type="number" placeholder="eg: 10,000" value={foodBudget} max={budget} onChange={e => setFoodBudget(e.target.value)} 
            className="w-full bg-[#1f242f] border border-[#232836] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>

        {/* Transport Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 flex items-center gap-1.5">🚗 Transport</label>
          <input type="number" placeholder='eg: 5,000' value={transportBudget} max={budget} onChange={e => setTransportBudget(e.target.value)} 
            className="w-full bg-[#1f242f] border border-[#232836] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>

        {/* Bills Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 flex items-center gap-1.5">💡 Bills & Utilities</label>
          <input type='number' placeholder='eg: 8,000' value={billsBudget} max={budget} onChange={e => setBillsBudget(e.target.value)} 
            className="w-full bg-[#1f242f] border border-[#232836] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>

        {/* Entertainment Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 flex items-center gap-1.5">🎮 Entertainment</label>
          <input type="number" placeholder='eg: 3,000' value={entertainmentBudget} max={budget} onChange={e => setEntertainmentBudget(e.target.value)} 
            className="w-full bg-[#1f242f] border border-[#232836] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>

        {/* Health Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 flex items-center gap-1.5">💪 Health & Fitness</label>
          <input type='number' placeholder='eg: 2,000' value={healthBudget} max={budget} onChange={e => setHealthBudget(e.target.value)} 
            className="w-full bg-[#1f242f] border border-[#232836] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>

        {/* Other Input */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-gray-400 flex items-center gap-1.5">🩺 Other Expenses</label>
          <input type='number' placeholder='eg: 4,000' value={otherBudget} max={budget} onChange={e => setOtherBudget(e.target.value)} 
            className="w-full bg-[#1f242f] border border-[#232836] rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-[#00f2fe] transition-colors" />
        </div>

      </div>

      {/* 🚀 Next Button Component Area */}
      <div className="max-w-md mx-auto mt-8">
        <button
          onClick={nextStep}
          disabled={!budget || Number(budget) <= 0 || Number(budget) > Number(income)}
          className="w-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 hover:opacity-95 active:scale-[0.99] transition-all duration-200 disabled:opacity-20 disabled:pointer-events-none disabled:scale-100"
        >
          Next Step
        </button>
      </div>

    </div>
  );
}

export default BudgetStep;