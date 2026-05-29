import react from "react";  




function BudgetReview({income, budget, foodBudget, transportBudget, 
  billsBudget, entertainmentBudget, healthBudget, otherBudget}) {

    const saving = Number(income) - Number(budget) 
    const totalAllocated = Number(foodBudget) + Number(transportBudget) + Number(billsBudget) + Number(entertainmentBudget) + Number(healthBudget) + Number(otherBudget);
    const unAllocatedBudget = Number(budget) - totalAllocated


  return( 

    <div ClassName = "z-full w-full max-w-2xl p-8 bg-[#161920]/90 border border-[#232836] rounded-2xl shadow-2xl mx-4">
      <div ClassName = "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

      </div>
      
    </div>
  )



} export default BudgetReview;

 
 