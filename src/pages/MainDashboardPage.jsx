import { useState, useEffect } from "react";
import BudgetShow from "../components/BudgetShow"; 
import GetExpenses from "../components/GetExpenses"; 
import ShortTransactionHistry from "../components/ShortTransactionHistry";

function MainDashboardPage() {
  // --- FINANCIAL STATES ---
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(0);

  // Remaining budget categories (These decrease when expenses are added)
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

  // --- LIFECYCLE METHOD: LOAD PERSISTED DATA ON COMPONENT MOUNT ---
  useEffect(() => {
    const savedIncome = localStorage.getItem("userIncome");
    const savedBudget = localStorage.getItem("userBudget");
    const savedFood = localStorage.getItem("foodBudget");
    const savedTransport = localStorage.getItem("transportBudget");
    const savedBills = localStorage.getItem("billsBudget");
    const savedEntertainment = localStorage.getItem("entertainmentBudget");
    const savedHealth = localStorage.getItem("healthBudget");
    const savedOther = localStorage.getItem("otherBudget");
    const savedTransactions = localStorage.getItem("userTransactions");
    // Retrieve the special goal value from localStorage
    const savedSpecialGoal = localStorage.getItem("SpecialGoalShowValue");

    // Parse and load transaction history if records exist
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }

    // Convert stringified values back to numbers and update states
    if (savedIncome) setIncome(Number(savedIncome));
    if (savedBudget) {
      setBudget(Number(savedBudget));
      setInitialTotalBudget(Number(savedBudget)); // Set baseline for budget tracking graphs
    }
    if (savedFood) setFoodBudget(Number(savedFood));
    if (savedTransport) setTransportBudget(Number(savedTransport));
    if (savedBills) setBillsBudget(Number(savedBills));
    if (savedEntertainment) setEntertainmentBudget(Number(savedEntertainment));
    if (savedHealth) setHealthBudget(Number(savedHealth));
    if (savedOther) setOtherBudget(Number(savedOther));
    
    // Assign stored special goal amount to state if it exists
    if (savedSpecialGoal) setSpecialGoalValue(Number(savedSpecialGoal));
  }, []); // Empty dependency array ensures this runs only once when page mounts

  // Calculate remaining unallocated liquid cash
  const saving = income - budget;

  // --- BUSINESS LOGIC HANDLERS ---
  // Callback function triggered when a new transaction is successfully submitted in GetExpenses
  const handleAddTransaction = (category, amount) => {
    const newTx = { amount: Number(amount), expenseCategory: category };
    
    // Append the new transaction object to history using the array spread operator
    const updatedTransactions = [...transactions, newTx];
    setTransactions(updatedTransactions);
    
    // Persist the updated transaction array as a JSON string in localStorage
    localStorage.setItem("userTransactions", JSON.stringify(updatedTransactions));
  };

  return (
    <div className="pt-40 p-4 md:p-8 bg-[#0f1115] min-h-screen text-white w-full">
      <div className="w-full px-4 md:px-12 mt-8">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
          
          {/* LEFT COLUMN: EXPENSE SUBMISSION FORM & TRANSACTION HISTORY */}
          <div className="lg:col-span-1 order-2 lg:order-1 lg:pt-16 flex flex-col gap-6 w-full">
            <GetExpenses 
              foodBudget={foodBudget} setFoodBudget={setFoodBudget}
              transportBudget={transportBudget} setTransportBudget={setTransportBudget}
              billsBudget={billsBudget} setBillsBudget={setBillsBudget}
              entertainmentBudget={entertainmentBudget} setEntertainmentBudget={setEntertainmentBudget}
              healthBudget={healthBudget} setHealthBudget={setHealthBudget}
              otherBudget={otherBudget} setOtherBudget={setOtherBudget}
              // Pass down special goal state variables as reactive props
              goalValue={specialGoalValue} setGoalValue={setSpecialGoalValue}
              onAddTransaction={handleAddTransaction}
            />

            <ShortTransactionHistry transactions={transactions} />
          </div>

          {/* RIGHT COLUMN: REAL-TIME OVERVIEW & VISUALIZATION METRICS */}
          <div className="lg:col-span-2 order-1 lg:order-2">
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
              initialTotalBudget={initialTotalBudget}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainDashboardPage;