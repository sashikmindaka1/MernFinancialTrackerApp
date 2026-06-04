import React from "react";

function BudgetShow({
  income,
  budget,
  saving,
  foodBudget,
  transportBudget,
  billsBudget,
  entertainmentBudget,
  healthBudget,
  otherBudget,
  initialTotalBudget
}) {
  
  // 🧮 HELPER FUNCTION: Calculates progress percentage and dynamic color classes
  const getProgressDetails = (currentRemaining) => {
    // Assuming equal allocation across 6 main categories for baseline tracking
    const initialAllocation = initialTotalBudget / 6; 
    
    if (initialAllocation <= 0) return { percent: 0, colorClass: "bg-[#00f2fe]" };

    const totalSpent = initialAllocation - currentRemaining;
    // Cap the max percentage at 100% to keep UI layout fully stable
    let percent = Math.min(Math.max((totalSpent / initialAllocation) * 100, 0), 100);

    // 🎨 DYNAMIC PREMIUM COLORS BASED ON SPENDING THRESHOLDS
    let colorClass = "bg-[#00f2fe]"; // Neon Cyan/Green for Safe (< 50%)
    if (percent >= 50 && percent < 80) {
      colorClass = "bg-amber-500"; // Solid Warning Orange (50% - 80%)
    } else if (percent >= 80) {
      colorClass = "bg-rose-500 shadow-[0_0_10px_#f43f5e]"; // Glowing Neon Red Critical Warning (>= 80%)
    }

    return { percent, colorClass };
  };

  // Extract real-time calculations for each specific category
  const categories = [
    { name: "🍔 Food", current: foodBudget },
    { name: "🚗 Transport", current: transportBudget },
    { name: "💡 Bills", current: billsBudget },
    { name: "🎬 Entertainment", current: entertainmentBudget },
    { name: "🏥 Health", current: healthBudget },
    { name: "📦 Other", current: otherBudget },
  ];

  return (
    <div className="flex flex-col gap-8 w-full lg:pt-16">
      {/* 💳 TOP METRIC CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">💰 Total Income</p>
          <h2 className="text-2xl font-black text-white">Rs. {income.toLocaleString()}</h2>
        </div>
        <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">💳 Remaining Budget</p>
          <h2 className="text-2xl font-black text-[#00f2fe]">Rs. {budget.toLocaleString()}</h2>
        </div>
        <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-xl backdrop-blur-md">
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">📉 Expected Savings</p>
          <h2 className="text-2xl font-black text-emerald-400">Rs. {saving.toLocaleString()}</h2>
        </div>
      </div>

      {/* 📊 BUDGET CATEGORIES GRID */}
      <div className="p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-md lg:pt-28">
        <h1 className="text-xs font-bold mb-6 text-gray-400 uppercase tracking-widest ">
          Your Allocated Budgets & Usage Tracker
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const { percent, colorClass } = getProgressDetails(cat.current);

            return (
              <div key={idx} className="p-4 bg-[#1f242f]/50 border border-[#232836] rounded-xl hover:border-gray-700 transition duration-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">{cat.name}</span>
                  <span className={`text-sm font-bold ${cat.current < 0 ? "text-rose-500" : "text-white"}`}>
                    Rs. {cat.current.toLocaleString()}
                  </span>
                </div>

                {/* 📊 PREMIUM PROGRESS BAR WRAPPER */}
                <div className="w-full bg-[#111318] h-2 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ease-out ${colorClass}`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                {/* Optional minor helper label to show current usage percentage */}
                <div className="flex justify-end mt-1">
                  <span className="text-[10px] text-gray-500 font-medium">{Math.round(percent)}% Spent</span>
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