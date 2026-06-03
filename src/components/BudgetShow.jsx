function BudgetShow(saving, totalAllocated, unAllocatedBudget, income) {

  return(

    <div>
      <p> {saving.toLocaleString()}</p>
       <p> {income.toLocaleString()}</p>


    </div>

  )
} export default BudgetShow;