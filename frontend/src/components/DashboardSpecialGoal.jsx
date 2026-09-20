import React from 'react';

function DashboardSpecialGoal() {
  // --- FETCH PERSISTED DATA FROM LOCALSTORAGE ---
  const targetAmount = Number(localStorage.getItem("SpecialGoalShowValue")) || 0; // Total goal budget target
  const goalName = localStorage.getItem("SpecialGoalName") || "Special Goal";     // Goal identification label
  const accumulatedAmount = Number(localStorage.getItem("SpecialGoalValue")) || 0; // Current savings contributions

  // --- MATHEMATICAL LOGIC: CALCULATE PROGRESS PERCENTAGE ---
  const progressPercentage = targetAmount > 0 
    ? Math.min(Math.round((accumulatedAmount / targetAmount) * 100), 100) 
    : 0;

  // --- HANDLER: REMOVE CURRENT SPECIAL GOAL FROM LOCALSTORAGE ---
  function RemoveGoal() {
    localStorage.removeItem("SpecialGoalShowValue");
    localStorage.removeItem("SpecialGoalValue");
    localStorage.removeItem("SpecialGoalName");
    
    alert("Special Goal Removed Successfully! 🗑️");
    
    // Instantly refreshes the current page to clear the UI state
    window.location.reload();
  }
    
  return (
    // Premium translucent box with border glowing effects matching your UI theme
    <div className="w-full p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-md relative overflow-hidden group">
      
      {/* Background radial glow accent on hover */}
      <div className="absolute -inset-px bg-gradient-to-r from-[#00f2fe]/10 to-[#4facfe]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Header Container Section */}
      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <span className="text-[10px] font-bold text-[#00f2fe] uppercase tracking-widest bg-[#00f2fe]/10 px-2.5 py-1 rounded-md border border-[#00f2fe]/20">
             Savings Target
          </span>
          <h3 className="text-lg font-bold text-white mt-2.5 capitalize tracking-wide">
            {goalName}
          </h3>
        </div>
        
        {/* Dynamic Circular badge highlighting progress percentage */}
        <div className="text-right">
          <span className="text-2xl font-extrabold bg-gradient-to-r from-[#00f2fe] to-[#4facfe] bg-clip-text text-transparent">
            {progressPercentage}%
          </span>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Completed</p>
        </div>
      </div>

      {/* Financial Figure Metrics Grid Layout */}
      <div className="grid grid-cols-2 gap-4 mb-6 relative z-10 border-t border-[#232836]/60 pt-4">
        <div>
          <p className="text-xs text-gray-400 font-medium mb-1">Total Contributed</p>
          <p className="text-lg font-bold text-emerald-400">
            Rs. {accumulatedAmount.toLocaleString()}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 font-medium mb-1">Target Capital</p>
          <p className="text-lg font-bold text-slate-300">
            Rs. {targetAmount.toLocaleString()}
          </p>
        </div>
      </div>

      {/* --- PROGRESS BAR COMPONENT --- */}
      <div className="relative w-full h-2.5 bg-[#0f1115] border border-[#232836] rounded-full overflow-hidden mb-2 z-10">
        {/* Smooth transitioning linear gradient progress strip */}
        <div 
          className="h-full bg-gradient-to-r from-[#00f2fe] to-[#4facfe] rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(0,242,254,0.4)]"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Contextual description rendering remaining balance status */}
      <p className="text-[11px] text-gray-500 text-center font-medium italic mt-3">
        {progressPercentage >= 100 
          ? "🎉 Congratulations! You have fully achieved this goal target!" 
          : `Keep going! Rs. ${(targetAmount - accumulatedAmount).toLocaleString()} remaining to hit your target.`
        }
      </p>

      {/* Premium Crimson/Red Glow Danger Button for removal */}
      <button 
        onClick={RemoveGoal}
        className="w-full py-3 mt-4 bg-gradient-to-r from-[#830606] to-[#c51e00] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(197,30,0,0.4)] hover:opacity-95 transition-all duration-300 uppercase text-xs tracking-wider border border-[#c51e00]/30 relative z-10"
      >
        Remove Goal
      </button>

      {/* 🔮 REMOVED THE <SpecialGoal /> COMPONENT FROM HERE TO FIX THE LAYOUT BUG */}

    </div>
  );
}

export default DashboardSpecialGoal;