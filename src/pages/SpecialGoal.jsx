import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

function SpecialGoal() {
  const navigate = useNavigate();
  const [goalName, setGoalName] = useState("");
  const [goalValue, setGoalValue] = useState("");
  
  // Local states to handle live visual updates dynamically
  const [previewTarget, setPreviewTarget] = useState(0);
  const [liveProgress, setLiveProgress] = useState(0);

  // --- LIFECYCLE: FETCH ALL PERSISTED DATA ON MOUNT ---
  useEffect(() => {
    const savedGoalName = localStorage.getItem("SpecialGoalName") || "";
    const savedGoalValue = localStorage.getItem("SpecialGoalShowValue") || ""; 
    const accumulatedAmount = Number(localStorage.getItem("SpecialGoalValue")) || 0;

    setGoalName(savedGoalName);
    setGoalValue(savedGoalValue);
    
    const targetNum = Number(savedGoalValue);
    setPreviewTarget(targetNum);

    // Dynamic math to calculate the progress percentage independently
    if (targetNum > 0) {
      const calculatedProgress = Math.min(Math.round((accumulatedAmount / targetNum) * 100), 100);
      setLiveProgress(calculatedProgress);
    } else {
      setLiveProgress(0);
    }
  }, []);

  // --- HANDLER: CONFIGURING & SAVING THE TARGET ---
  const handleSaveGoal = () => {
    if (!goalName.trim() || !goalValue || Number(goalValue) <= 0) {
      alert("Please enter a valid goal name and target amount.");
      return;
    }

    // Saving updated information to localStorage
    localStorage.setItem("SpecialGoalName", goalName);
    localStorage.setItem("SpecialGoalShowValue", goalValue); 
    
    const targetNum = Number(goalValue);
    setPreviewTarget(targetNum);
    
    // Re-calculating progress instantly upon adding a new target configuration
    const accumulatedAmount = Number(localStorage.getItem("SpecialGoalValue")) || 0;
    const calculatedProgress = targetNum > 0 ? Math.min(Math.round((accumulatedAmount / targetNum) * 100), 100) : 0;
    setLiveProgress(calculatedProgress);

    alert("Special Goal Target configured successfully! 🚀");
  };

  return (
    <div className="min-h-screen bg-[#0f111a] text-white flex flex-col justify-between">
      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="flex-grow flex items-center justify-center px-6 py-16 relative overflow-hidden">
        
        {/* Ambient Blurred Background Neon Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00e5ff]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0072ff]/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Responsive Dual-Column Grid */}
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* ⬅ LEFT COLUMN: MARKETING COPY & REAL-TIME PREVIEW */}
          <div className="space-y-6 text-center md:text-left hidden md:block">
            <div className="inline-block px-3 py-1 bg-[#00e5ff]/10 border border-[#00e5ff]/30 rounded-full text-xs font-semibold text-[#00e5ff] uppercase tracking-wider">
               Smart Wealth Planning
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Visualize Your <br />
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#0072ff] bg-clip-text text-transparent">
                Financial Dreams
              </span>
            </h1>
            <p className="text-gray-400 text-base max-w-sm leading-relaxed">
              Setting clear targets is the first step to financial freedom. Define your objectives, track your savings progress, and stay motivated.
            </p>
            
            {/* Quick Metrics Preview Dashboard */}
            <div className="flex gap-8 pt-4 border-t border-[#23283a] max-w-sm">
              <div>
                {/* Dynamically connected to sync beautifully with the Dashboard updates */}
                <p className="text-2xl font-bold text-[#00e5ff]">
                  Progress: {liveProgress}%
                </p>
                <p className="text-xs text-gray-500 uppercase">Avg. Progress</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  Rs. {previewTarget ? previewTarget.toLocaleString() : "0"}
                </p>
                <p className="text-xs text-gray-500 uppercase">Target Goal</p>
              </div>
            </div>
          </div>

          {/* ➡ RIGHT COLUMN: INTERACTIVE FORM CONTAINER */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="w-full max-w-md bg-[#161924]/60 border border-[#23283a] rounded-2xl p-8 shadow-2xl backdrop-blur-xl">
              
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-[#00e5ff] tracking-wide uppercase">
                  Set Future Goals
                </h2>
                <p className="text-xs text-gray-400 mt-2">
                  Plan your goals and start investing in your dreams.
                </p>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-5">
                {/* Goal Name Field */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Add your future goal
                  </label>
                  <input 
                    value={goalName}
                    onChange={(e) => setGoalName(e.target.value)}
                    type="text" 
                    placeholder="Name of your dream (e.g. New Laptop)"
                    className="w-full bg-[#0f111a] border border-[#2d3548] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00e5ff] transition-all"
                  />
                </div>

                {/* Target Capital Amount Field */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                    Target Amount
                  </label>
                  <div className="relative flex items-center bg-[#0f111a] border border-[#2d3548] rounded-xl px-4 py-3 focus-within:border-[#00e5ff] transition-all">
                    <span className="text-gray-500 font-bold text-sm mr-2 pointer-events-none">Rs.</span>
                    <input 
                      value={goalValue}
                      onChange={(e) => setGoalValue(e.target.value)}
                      type="number" 
                      placeholder="12,000"
                      className="w-full bg-transparent text-white placeholder-gray-600 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                </div>

                {/* Submit Action Button */}
                <button 
                  onClick={handleSaveGoal}
                  type="button"
                  className="w-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:opacity-95 active:scale-[0.98] transition-all uppercase tracking-wider text-xs"
                >
                  Start Investing
                </button>
              </div>

              {/* Visual Divider Separator */}
              <div className="border-t border-[#23283a] my-6"></div>

              {/* Secondary Navigation */}
              <div className="text-center">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">
                  Ready to check your Dashboard?
                </h3>
                <button
                  onClick={() => navigate("/OnboardingSetupPage")} 
                  type="button"
                  className="w-full bg-[#1e2332]/50 border border-[#2d3548] text-[#00e5ff] hover:bg-[#00e5ff]/10 font-bold py-3 px-4 rounded-xl transition-all uppercase tracking-wider text-xs"
                >
                  Next
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SpecialGoal;