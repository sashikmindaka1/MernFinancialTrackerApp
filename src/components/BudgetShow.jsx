function BudgetShow({income, budget, saving, foodBudget, transportBudget, billsBudget, entertainmentBudget, healthBudget, otherBudget}) {

  return(

    <div className="w-full max-w-6xl mx-auto space-y-8">
      
      {/* 💰 CORE FINANCIAL CARDS ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        {/* Total Income Card */}
        <div className="bg-[#161920]/80 border border-[#232836] p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between transition hover:border-gray-700">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">💰 Total Income</p>
          <p className="text-2xl md:text-3xl font-black text-white">
            Rs. {income.toLocaleString()}
          </p>
        </div>

        {/* Monthly Budget Card */}
        <div className="bg-[#161920]/80 border border-[#232836] p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between transition hover:border-[#00f2fe]/40">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">💳 Monthly Budget</p>
          <p className="text-2xl md:text-3xl font-black text-[#00f2fe]">
            Rs. {budget.toLocaleString()}
          </p>
        </div>

        {/* Expected Savings Card */}
        <div className="bg-[#161920]/80 border border-[#232836] p-6 rounded-2xl shadow-xl backdrop-blur-md flex flex-col justify-between transition hover:border-emerald-500/40">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">📉 Expected Savings</p>
          <p className="text-2xl md:text-3xl font-black text-emerald-400">
            Rs. {saving.toLocaleString()}
          </p>
        </div>

      </div>

      {/* ALLOCATED BUDGETS SECTION */}
      <div className="bg-[#161920]/40 border border-[#232836]/60 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-6 pb-2 border-b border-[#232836]">
          Your Allocated Budgets
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          
          {/* Food */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm hover:border-purple-900/50 transition">
            <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-1">🍔 Food</p>
            <p className="text-base font-bold text-indigo-400">Rs. {foodBudget.toLocaleString()}</p>
          </div>

          {/* Transport */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm hover:border-purple-900/50 transition">
            <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-1">🚗 Transport</p>
            <p className="text-base font-bold text-indigo-400">Rs. {transportBudget.toLocaleString()}</p>
          </div>

          {/* Bills */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm hover:border-purple-900/50 transition">
            <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-1">💡 Bills</p>
            <p className="text-base font-bold text-indigo-400">Rs. {billsBudget.toLocaleString()}</p>
          </div>

          {/* Entertainment */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm hover:border-purple-900/50 transition">
            <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-1">🎬 Entertainment</p>
            <p className="text-base font-bold text-indigo-400">Rs. {entertainmentBudget.toLocaleString()}</p>
          </div>

          {/* Other */}
          <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl shadow-sm hover:border-purple-900/50 transition">
            <p className="text-[11px] font-semibold text-purple-300 uppercase tracking-wider mb-1">📦 Other</p>
            <p className="text-base font-bold text-indigo-400">Rs. {otherBudget.toLocaleString()}</p>
          </div>

        </div>
      </div>

    </div>
  )
} export default BudgetShow;