function BudgetShow({income, budget, saving, foodBudget, transportBudget, billsBudget, entertainmentBudget, healthBudget, otherBudget}) {

  return(

    <div>
       <div>
       {/*  Core Financial Cards (Income, Budget, Savings) */}
       <p>Total Income: Rs. {income.toLocaleString()}</p>
       <p>Monthly Budget: Rs. {budget.toLocaleString()}</p>
       <p>Expected Savings: Rs. {saving.toLocaleString()}</p>

       <hr className="my-4 border-[#232836]" />

       {/*  Individual Category Budgets inside Dashboard */}
       <h3>Your Allocated Budgets:</h3>
       <p> Food: Rs. {foodBudget.toLocaleString()}</p>
       <p> Transport: Rs. {transportBudget.toLocaleString()}</p>
       <p> bill: Rs. {billsBudget.toLocaleString()}</p>
       <p> entertainment: Rs. {entertainmentBudget.toLocaleString()}</p>
       <p> other: Rs. {otherBudget.toLocaleString()}</p>

    </div>

    </div>

  )
} export default BudgetShow;