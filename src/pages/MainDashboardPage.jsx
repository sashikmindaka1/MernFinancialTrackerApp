import { useState, useEffect } from "react";
import BudgetShow from "../components/BudgetShow";


function MainDashboardPage() {

  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(0);

  const [foodBudget, setFoodBudget] = useState(0);
  const [transportBudget, setTransportBudget] = useState(0);
  const [billsBudget, setBillsBudget] = useState(0);
  const [entertainmentBudget, setEntertainmentBudget] = useState(0);
  const [healthBudget, setHealthBudget] = useState(0);
  const [otherBudget, setOtherBudget] = useState(0);

  useEffect(() => {
    const savedIncome = localStorage.getItem("userIncome")
    const savedBudget = localStorage.getItem("userBudget");
    const savedFood = localStorage.getItem("foodBudget");
    const savedTransport = localStorage.getItem("transportBudget");
    const savedBills = localStorage.getItem("billsBudget");
    const savedEntertainment = localStorage.getItem("entertainmentBudget");
    const savedHealth = localStorage.getItem("healthBudget");
    const savedOther = localStorage.getItem("otherBudget");


    if (savedIncome) setIncome(Number(savedIncome));
    if (savedBudget) setBudget(Number(savedBudget));
    if (savedFood) setFoodBudget(Number(savedFood));
    if (savedTransport) setTransportBudget(Number(savedTransport));
    if (savedBills) setBillsBudget(Number(savedBills));
    if (savedEntertainment) setEntertainmentBudget(Number(savedEntertainment));
    if (savedHealth) setHealthBudget(Number(savedHealth));
    if (savedOther) setOtherBudget(Number(savedOther));
  }, []);

  const saving = income - budget;


  return (
    <div className="p-6 bg-[#0f1115] min-h-screen text-white">
    
      <BudgetShow
      income={income}
      budget={budget}
      saving={saving}
      foodBudget={foodBudget}
      transportBudget={transportBudget}
      billsBudget={billsBudget}
      entertainmentBudget={entertainmentBudget}
      healthBudget={healthBudget}
      otherBudget={otherBudget} 
      />
      

    </div>
  )
} export default MainDashboardPage;