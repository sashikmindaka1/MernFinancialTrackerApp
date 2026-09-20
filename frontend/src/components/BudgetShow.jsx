import React from "react";

function BudgetShow({
  income,
  budget,
  saving,
  // 1. Initial Allocated Budgets (Original constants from Onboarding)
  foodBudget,
  transportBudget,
  billsBudget,
  entertainmentBudget,
  healthBudget,
  otherBudget,
  // 2. Active Tracking Budgets (Current remaining balances after expenses)
  currentFoodBudget,
  currentTransportBudget,
  currentBillsBudget,
  currentEntertainmentBudget,
  currentHealthBudget,
  currentOtherBudget,
}) {
  
  // HELPER FUNCTION: Calculates exact spending percentage and premium dynamic colors
  const getProgressDetails = (initialAllocation, currentRemaining) => {
    if (initialAllocation <= 0) return { percent: 0, colorClass: "bg-[#00f2fe]" };

    // Math Logic: Spent Amount = Total Budget Allocated - Remaining Balance
    const totalSpent = initialAllocation - currentRemaining;
    
    // Calculate percentage spent, bound tightly between 0% and 100% for UI stability
    let percent = Math.min(Math.max((totalSpent / initialAllocation) * 100, 0), 100);

    // DYNAMIC PREMIUM COLORS BASED ON SPENDING THRESHOLDS
    let colorClass = "bg-[#00f2fe]"; // Cyber Cyan/Green for Safe Zone (< 50%)
    if (percent >= 50 && percent < 80) {
      colorClass = "bg-amber-500"; // Warning Orange Zone (50% - 80%)
    } else if (percent >= 80) {
      colorClass = "bg-rose-500 shadow-[0_0_10px_#f43f5e]"; // Critical Neon Red Glow Zone (>= 80%)
    }

    return { percent, colorClass };
  };

  // Structured dataset pairing matching allocations together for iterative mapping
  const categories = [
    { name: "Food", initial: foodBudget, current: currentFoodBudget },
    { name: "Transport", initial: transportBudget, current: currentTransportBudget },
    { name: "Bills", initial: billsBudget, current: currentBillsBudget },
    { name: "Entertainment", initial: entertainmentBudget, current: currentEntertainmentBudget },
    { name: "Health", initial: healthBudget, current: currentHealthBudget },
    { name: "Other", initial: otherBudget, current: currentOtherBudget },
  ];

  return (
    <div className="flex flex-col gap-8 w-full lg:pt-16">
      {/* TOP MAIN METRIC SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Total Income</p>
          <h2 className="text-2xl font-black text-white">Rs. {income.toLocaleString()}</h2>
        </div>
        <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Remaining Budget</p>
          <h2 className="text-2xl font-black text-[#00f2fe]">Rs. {budget.toLocaleString()}</h2>
        </div>
        <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">Expected Savings</p>
          <h2 className="text-2xl font-black text-emerald-400">Rs. {saving.toLocaleString()}</h2>
        </div>
      </div>

      {/*  BUDGET CATEGORIES GRID */}
      <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-md">
        <h1 className="text-xs font-bold mb-6 text-gray-400 uppercase tracking-widest">
          Your Allocated Budgets & Usage Tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            // Passing individual initial limitations alongside current remaining values
            const { percent, colorClass } = getProgressDetails(cat.initial, cat.current);

            return (
              <div key={idx} className="p-4 bg-[#1f242f]/50 border border-[#232836] rounded-xl hover:border-gray-700 transition duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">{cat.name}</span>
                  {/* Text shows real-time active wallet remaining balance */}
                  <span className={`text-sm font-bold ${cat.current < 0 ? "text-rose-500" : "text-white"}`}>
                    Rs. {cat.current.toLocaleString()}
                  </span>
                </div>

                {/*  PREMIUM CYBER PROGRESS BAR WRAPPER */}
                <div className="w-full bg-[#111318] h-2 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {/* Tracking sub-metrics rendering both configuration ceilings and consumption ratios */}
                <div className="flex justify-between mt-1 text-[10px] text-gray-500 font-bold tracking-wide">
                  <span>Allocated: Rs. {cat.initial.toLocaleString()}</span>
                  <span>{Math.round(percent)}% Spent</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BudgetShow;