import { useState, useEffect } from "react";
import BudgetShow from "../components/BudgetShow"; 
import GetExpenses from "../components/GetExpenses"; 

function MainDashboardPage() {
  // --- FINANCIAL STATES ---
  // Core financial tracking metrics
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(0);

  // Category-specific budget allocations
  const [foodBudget, setFoodBudget] = useState(0);
  const [transportBudget, setTransportBudget] = useState(0);
  const [billsBudget, setBillsBudget] = useState(0);
  const [entertainmentBudget, setEntertainmentBudget] = useState(0);
  const [healthBudget, setHealthBudget] = useState(0);
  const [otherBudget, setOtherBudget] = useState(0);

  // --- LOAD DATA FROM LOCALSTORAGE ---
  // Runs once on component mount to retrieve previously saved financial records
  useEffect(() => {
    const savedIncome = localStorage.getItem("userIncome");
    const savedBudget = localStorage.getItem("userBudget");
    const savedFood = localStorage.getItem("foodBudget");
    const savedTransport = localStorage.getItem("transportBudget");
    const savedBills = localStorage.getItem("billsBudget");
    const savedEntertainment = localStorage.getItem("entertainmentBudget");
    const savedHealth = localStorage.getItem("healthBudget");
    const savedOther = localStorage.getItem("otherBudget");

    // Convert strings from localStorage to Numbers before updating React states
    if (savedIncome) setIncome(Number(savedIncome));
    if (savedBudget) setBudget(Number(savedBudget));
    if (savedFood) setFoodBudget(Number(savedFood));
    if (savedTransport) setTransportBudget(Number(savedTransport));
    if (savedBills) setBillsBudget(Number(savedBills));
    if (savedEntertainment) setEntertainmentBudget(Number(savedEntertainment));
    if (savedHealth) setHealthBudget(Number(savedHealth));
    if (savedOther) setOtherBudget(Number(savedOther));
  }, []);

  // Calculate Savings dynamically based on current Income and Budget states
  const saving = income - budget;

  return (
    // 💡 Changed from pt-32 to pt-40 to completely fix the overlapping fixed navbar bug
   <div className="pt-40 p-4 md:p-8 bg-[#0f1115] min-h-screen text-white w-full">
    
    {/* 🚨 `max-w-7xl mx-auto` අයින් කරලා, පිටුවේ කෙළවරටම යන්න `w-full px-4 md:px-12` දැම්මා */}
    <div className="w-full px-4 md:px-12 mt-8">
      
      {/* 💻 PREMIUM GRID LAYOUT - Now takes 100% width of the screen */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
        
        {/* ⬅️ LEFT COLUMN: EXPENSE TRANSACTION FORM */}
        {/* 💡 `flex justify-start w-full` දැම්මම මේක වම් කෙළවරටම ඇලිලා හිටිනවා */}
        <div className="lg:col-span-1 order-2 lg:order-1 lg:pt-16 flex justify-start w-full lg:pr-20">
            <GetExpenses 
              foodBudget={foodBudget} setFoodBudget={setFoodBudget}
              transportBudget={transportBudget} setTransportBudget={setTransportBudget}
              billsBudget={billsBudget} setBillsBudget={setBillsBudget}
              entertainmentBudget={entertainmentBudget} setEntertainmentBudget={setEntertainmentBudget}
              healthBudget={healthBudget} setHealthBudget={setHealthBudget}
              otherBudget={otherBudget} setOtherBudget={setOtherBudget}
            />
          </div>

          {/* ➡️ RIGHT COLUMN: REAL-TIME FINANCIAL CARDS (Takes 2 Parts of the Grid) */}
          {/* Responsive ordering forces this to display at the very top on mobile devices */}
          <div className="lg:col-span-2 order-1 lg:order-2 lg:pt-16">
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

        </div> {/* Grid End */}

      </div>
    </div>
  );
}

export default MainDashboardPage;