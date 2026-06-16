import { useState, useEffect } from "react";
import BudgetShow from "../components/BudgetShow"; 
import GetExpenses from "../components/GetExpenses"; 
import ShortTransactionHistry from "../components/ShortTransactionHistry";
import DashboardSpecialGoal from "../components/DashboardSpecialGoal";  

function MainDashboardPage() {
  // --- FINANCIAL STATES ---
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(0);

  // Initial constant allocations from onboarding
  const [foodBudget, setFoodBudget] = useState(0);
  const [transportBudget, setTransportBudget] = useState(0);
  const [billsBudget, setBillsBudget] = useState(0);
  const [entertainmentBudget, setEntertainmentBudget] = useState(0);
  const [healthBudget, setHealthBudget] = useState(0);
  const [otherBudget, setOtherBudget] = useState(0);
  
  // State to track the accumulated value of the special goal target
  const [specialGoalValue, setSpecialGoalValue] = useState(0);

  // Track the initial allocated total budget to calculate progress percentages
  const [initialTotalBudget, setInitialTotalBudget] = useState(0);
  
  // Array state to hold the log of tracked expenses
  const [transactions, setTransactions] = useState([]); 

  // --- ACTIVE REMAINING TRACKING STATES ---
  const [currentFoodBudget, setCurrentFoodBudget] = useState(0);
  const [currentTransportBudget, setCurrentTransportBudget] = useState(0);
  const [currentBillsBudget, setCurrentBillsBudget] = useState(0);
  const [currentEntertainmentBudget, setCurrentEntertainmentBudget] = useState(0);
  const [currentHealthBudget, setCurrentHealthBudget] = useState(0);
  const [currentOtherBudget, setCurrentOtherBudget] = useState(0);

  // --- LIFECYCLE METHOD: LOAD PERSISTED DATA ON COMPONENT MOUNT ---
  useEffect(() => {
    // 1. Fetch original constant allocations
    const savedIncome = localStorage.getItem("userIncome");
    const savedBudget = localStorage.getItem("userBudget");
    const savedFood = localStorage.getItem("foodBudget");
    const savedTransport = localStorage.getItem("transportBudget");
    const savedBills = localStorage.getItem("billsBudget");
    const savedEntertainment = localStorage.getItem("entertainmentBudget");
    const savedHealth = localStorage.getItem("healthBudget");
    const savedOther = localStorage.getItem("otherBudget");
    const savedTransactions = localStorage.getItem("userTransactions");

    // 2. Fetch active remaining balances
    const savedCurrentFoodBudget = localStorage.getItem("currentFoodBudget");
    const savedCurrentTransportBudget = localStorage.getItem("currentTransportBudget");
    const savedCurrentBillsBudget = localStorage.getItem("currentBillsBudget");
    const savedCurrentEntertainmentBudget = localStorage.getItem("currentEntertainmentBudget");
    const savedCurrentHealthBudget = localStorage.getItem("currentHealthBudget");
    const savedCurrentOtherBudget = localStorage.getItem("currentOtherBudget");
    
    // Read the correct accumulated savings from localStorage for the goal box
    const savedSpecialGoal = localStorage.getItem("SpecialGoalValue");

    // Parse and load transaction history if records exist
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }

    // Convert stringified values back to numbers and update base states
    if (savedIncome) setIncome(Number(savedIncome));
    if (savedBudget) {
      setBudget(Number(savedBudget));
      setInitialTotalBudget(Number(savedBudget)); 
    }
    if (savedFood) setFoodBudget(Number(savedFood));
    if (savedTransport) setTransportBudget(Number(savedTransport));
    if (savedBills) setBillsBudget(Number(savedBills));
    if (savedEntertainment) setEntertainmentBudget(Number(savedEntertainment));
    if (savedHealth) setHealthBudget(Number(savedHealth));
    if (savedOther) setOtherBudget(Number(savedOther));
    
    // Assign stored special goal amount to state if it exists
    if (savedSpecialGoal) setSpecialGoalValue(Number(savedSpecialGoal));

    // 3. CRITICAL HYDRATION: Sync Active Remaining States with fallback to baseline allocations
    setCurrentFoodBudget(savedCurrentFoodBudget !== null ? Number(savedCurrentFoodBudget) : Number(savedFood || 0));
    setCurrentTransportBudget(savedCurrentTransportBudget !== null ? Number(savedCurrentTransportBudget) : Number(savedTransport || 0));
    setCurrentBillsBudget(savedCurrentBillsBudget !== null ? Number(savedCurrentBillsBudget) : Number(savedBills || 0));
    setCurrentEntertainmentBudget(savedCurrentEntertainmentBudget !== null ? Number(savedCurrentEntertainmentBudget) : Number(savedEntertainment || 0));
    setCurrentHealthBudget(savedCurrentHealthBudget !== null ? Number(savedCurrentHealthBudget) : Number(savedHealth || 0));
    setCurrentOtherBudget(savedCurrentOtherBudget !== null ? Number(savedCurrentOtherBudget) : Number(savedOther || 0));

  }, []); 

  // Calculate remaining unallocated liquid cash
  const saving = income - budget;

  // --- BUSINESS LOGIC HANDLERS ---
  const handleAddTransaction = (category, amount) => {
    const newTx = { amount: Number(amount), expenseCategory: category };
    
    // Append the new transaction object to history using the array spread operator
    const updatedTransactions = [...transactions, newTx];
    setTransactions(updatedTransactions);
    
    // Persist the updated transaction array as a JSON string in localStorage
    localStorage.setItem("userTransactions", JSON.stringify(updatedTransactions));
  };

  return (
    <div className="pt-32 p-4 md:p-8 bg-[#0f1115] min-h-screen text-white w-full font-sans antialiased selection:bg-[#00f2fe]/30 selection:text-white">
      <div className="w-full max-w-[1600px] mx-auto px-2 md:px-6 mt-4">
        
        {/* Responsive Grid Layout Definition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
          
          {/* LEFT COLUMN: EXPENSE SUBMISSION FORM & TRANSACTION HISTORY */}
          <div className="lg:col-span-1 order-2 lg:order-1 flex flex-col gap-8 w-full">
            <GetExpenses 
              foodBudget={foodBudget} setFoodBudget={setFoodBudget}
              transportBudget={transportBudget} setTransportBudget={setTransportBudget}
              billsBudget={billsBudget} setBillsBudget={setBillsBudget}
              entertainmentBudget={entertainmentBudget} setEntertainmentBudget={setEntertainmentBudget}
              healthBudget={healthBudget} setHealthBudget={setHealthBudget}
              otherBudget={otherBudget} setOtherBudget={setOtherBudget}
              goalValue={specialGoalValue} setGoalValue={setSpecialGoalValue}

              // Corrected exact prop casing mappings
              currentFoodBudget={currentFoodBudget} setCurrentFoodBudget={setCurrentFoodBudget}
              currentTransportBudget={currentTransportBudget} setCurrentTransportBudget={setCurrentTransportBudget}
              currentBillsBudget={currentBillsBudget} setCurrentBillsBudget={setCurrentBillsBudget}
              currentEntertainmentBudget={currentEntertainmentBudget} setCurrentEntertainmentBudget={setCurrentEntertainmentBudget}
              currentHealthBudget={currentHealthBudget} setCurrentHealthBudget={setCurrentHealthBudget}
              currentOtherBudget={currentOtherBudget} setCurrentOtherBudget={setCurrentOtherBudget}

              onAddTransaction={handleAddTransaction}
            />

            <ShortTransactionHistry transactions={transactions} />
          </div>

          {/*  RIGHT COLUMN: OVERVIEW STATS & PROGRESS TRACKING */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col gap-8 w-full">
            
            <BudgetShow
              income={income}
              budget={budget}
              saving={saving}
  
              // 1. Initial Allocated Constant Budgets
              foodBudget={foodBudget}
              transportBudget={transportBudget}
              billsBudget={billsBudget}
              entertainmentBudget={entertainmentBudget}
              healthBudget={healthBudget}
              otherBudget={otherBudget}

              // 2. Active Remaining Tracker Values
              currentFoodBudget={currentFoodBudget}
              currentTransportBudget={currentTransportBudget}
              currentBillsBudget={currentBillsBudget}
              currentEntertainmentBudget={currentEntertainmentBudget}
              currentHealthBudget={currentHealthBudget}
              currentOtherBudget={currentOtherBudget}
            />
            
            {/* Special Goal Component */}
            <DashboardSpecialGoal 
              accumulatedFromState={specialGoalValue} 
              setGoalValue={setSpecialGoalValue}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainDashboardPage;