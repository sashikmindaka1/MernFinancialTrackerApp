// 🚨 වැදගත්ම දේ: Props සේරම සඟල වරහන් { } ඇතුළේ ලියන්න මචං
function BudgetShow({ saving, totalAllocated, unAllocatedBudget, income, budget }) {

  return (
    /* 🗂️ Main Layout Wrapper: grid එකක් දාලා තියෙන්නේ Phone වලදී 1යි, PC වලදී පේළියට 3ක් වෙන්න */
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-8">
      
      {/* 🟢 1 වන කාඩ් එක - Total Income */}
      <div className="bg-[#161920]/80 border border-[#232836] p-6 rounded-2xl shadow-xl backdrop-blur-md text-center flex flex-col justify-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">💰 Total Income</p>
        <p className="text-2xl font-black text-white">
          Rs. {income ? income.toLocaleString() : "0"}
        </p>
      </div>

      {/* 🔵 2 වන කාඩ් එක - Monthly Budget */}
      <div className="bg-[#161920]/80 border border-[#232836] p-6 rounded-2xl shadow-xl backdrop-blur-md text-center flex flex-col justify-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">💳 Monthly Budget</p>
        <p className="text-2xl font-black text-[#00f2fe]">
          Rs. {budget ? budget.toLocaleString() : "0"}
        </p>
      </div>

      {/* 🟡 3 වන කාඩ් එක - Expected Savings */}
      <div className="bg-[#161920]/80 border border-[#232836] p-6 rounded-2xl shadow-xl backdrop-blur-md text-center flex flex-col justify-center">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">📉 Expected Savings</p>
        <p className="text-2xl font-black text-emerald-400">
          Rs. {saving ? saving.toLocaleString() : "0"}
        </p>
      </div>

    </div>
  );
}

export default BudgetShow;