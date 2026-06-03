import { useState, useEffect } from "react";
import BudgetShow from "../components/budgetShow";


function MainDashboardPage() {

  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(0);

  const [foodBudget, setFoodBudget] = useState(0);
  const [transportBudget, setTransportBudget] = useState(0);
  const [billsBudget, setBillsBudget] = useState(0);
  const [entertainmentBudget, setEntertainmentBudget] = useState(0);
  const [healthBudget, setHealthBudget] = useState(0);
  const [otherBudget, setOtherBudget] = useState(0);






  return (
    <div>
    
      <BudgetShow />
      

    </div>
  )
} export default MainDashboardPage;