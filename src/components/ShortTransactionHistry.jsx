function ShortTransactionHistry({transactions = []}) {

  const latestTransactions = transactions.slice(-4).reverse();

  return(
    <div className="w-full p-6 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-md mt-6">
      
      {/* 1. Header Title */}
      <h3 className="text-xs font-bold mb-4 text-gray-400 uppercase tracking-widest flex items-center gap-2">
        <span></span> Recent Expenses
      </h3>

      {/* 2. Logic Check: If the array is empty, show a message */}
      {latestTransactions.length === 0 ? (
        <div className="py-4 text-center border border-dashed border-[#232836] rounded-xl">
          <p className="text-xs text-gray-500 italic">No recent expenses tracked yet, machan!</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {latestTransactions.map((tx, idx) => (
            <div 
              key={idx} 
              className="flex justify-between items-center p-3 bg-[#1f242f]/40 border border-[#232836]/60 rounded-xl hover:border-gray-700/50 transition duration-200"
            >
              {/* Left Column: Displays the Category Name */}
              <span className="text-xs font-semibold text-gray-300 capitalize">
                {tx.expenseCategory ? tx.expenseCategory.replace("Budget", "") : "Expense"}
              </span>

              {/* Right Column: Displays the amount with a negative sign in Neon Red */}
              <span className="text-xs font-bold text-rose-400">
                - Rs. {Number(tx.amount).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )

} export default ShortTransactionHistry;