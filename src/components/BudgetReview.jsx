import react from "react";  
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'




function BudgetReview({income, budget, foodBudget, transportBudget, 
  billsBudget, entertainmentBudget, healthBudget, otherBudget}) {

    const saving = Number(income) - Number(budget) 
    const totalAllocated = Number(foodBudget) + Number(transportBudget) + Number(billsBudget) + Number(entertainmentBudget) + Number(healthBudget) + Number(otherBudget);
    const unAllocatedBudget = Number(budget) - totalAllocated


  return( 

    <div className = "z-full w-full max-h-9 p-8 bg-[#161920]/90 border border-[#232836] rounded-2xl shadow-2xl mx-4">
      <div className = "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        
        {/* 1st Card: Total Income */}
        <div className="bg-[#1f242f] border border-[#232836] p-4 rounded-xl text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Income</p>
          <p className="text-xl font-bold text-white">Rs. {Number(income).toLocaleString()}</p>
        </div>

        {/* 2nd Card: Total Budget */}
        <div className="bg-[#1f242f] border border-[#232836] p-4 rounded-xl text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Total Budget</p>
          <p className="text-xl font-bold text-[#00f2fe]">Rs. {Number(budget).toLocaleString()}</p>
        </div>

        {/* 3rd Card: Planned Savings */}
        <div className="bg-[#1f242f] border border-[#232836] p-4 rounded-xl text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Planned Savings</p>
          <p className="text-xl font-bold text-emerald-400">Rs. {saving.toLocaleString()}</p>
        </div>







       <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl text-center shadow-sm">
         <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">food budget</p>
         <p className="text-xl font-bold text-indigo-400">Rs. {foodBudget.toLocaleString()}</p>
       </div>

       <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl text-center shadow-sm">
         <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">transport budget</p>
         <p className="text-xl font-bold text-indigo-400">Rs. {transportBudget.toLocaleString()}</p>
       </div>

       <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl text-center shadow-sm">
         <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">bills budget</p>
         <p className="text-xl font-bold text-indigo-400">Rs. {billsBudget.toLocaleString()}</p>
       </div>

       <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl text-center shadow-sm">
         <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">entertainment Budget</p>
         <p className="text-xl font-bold text-indigo-400">Rs. {entertainmentBudget.toLocaleString()}</p>
       </div>

       <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl text-center shadow-sm">
         <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">health Budget</p>
         <p className="text-xl font-bold text-indigo-400">Rs. {healthBudget.toLocaleString()}</p>
       </div>

       <div className="bg-[#1a1625] border border-[#261f35] p-4 rounded-xl text-center shadow-sm">
         <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-1">other Budget</p>
         <p className="text-xl font-bold text-indigo-400">Rs. {otherBudget.toLocaleString()}</p>
       </div>

      </div>

      <button className="">finish</button>
      
    </div>
  )



} export default BudgetReview;

 
 