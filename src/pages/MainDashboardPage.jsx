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

  // Track the initial allocated total budget to calculate progress percentages
  const [initialTotalBudget, setInitialTotalBudget] = useState(0);
  
  // Array state to hold the log of tracked expenses
  const [transactions, setTransactions] = useState([]); 

  // --- INITIALIZATION LIFECYCLE: LOAD DATA FROM LOCALSTORAGE ---
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
    
    // Parse and set the transaction history if records exist
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }

    // Convert string data back to numbers and assign to states
    if (savedIncome) setIncome(Number(savedIncome));
    if (savedBudget) {
      setBudget(Number(savedBudget));
      setInitialTotalBudget(Number(savedBudget)); // Lock down baseline budget allocation
    }
    if (savedFood) setFoodBudget(Number(savedFood));
    if (savedTransport) setTransportBudget(Number(savedTransport));
    if (savedBills) setBillsBudget(Number(savedBills));
    if (savedEntertainment) setEntertainmentBudget(Number(savedEntertainment));
    if (savedHealth) setHealthBudget(Number(savedHealth));
    if (savedOther) setOtherBudget(Number(savedOther));
  }, []); // Run once on component mounting to prevent rendering loops

  // Calculate remaining unallocated liquid cash
  const saving = income - budget;

  // --- BUSINESS LOGIC HANDLERS ---
  // Callback execution triggered upon form submission inside GetExpenses component
  const handleAddTransaction = (category, amount) => {
    const newTx = { amount: Number(amount), expenseCategory: category };
    
    // Append new transaction record into state utilizing the array spread operator
    const updatedTransactions = [...transactions, newTx];
    setTransactions(updatedTransactions);
    
    // Persist updated list structure to LocalStorage
    localStorage.setItem("userTransactions", JSON.stringify(updatedTransactions));
  };

  return (
    <div className="pt-40 p-4 md:p-8 bg-[#0f1115] min-h-screen text-white w-full">
      <div className="w-full px-4 md:px-12 mt-8">
        
        {/* Responsive Layout Grid Definition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full">
          
          {/* ⬅ LEFT COLUMN: EXPENSE TRANSACTION FORM & RECENT HISTORY VIEW */}
          {/* Note: changed to flex-col to cleanly separate form block from history container vertically */}
          <div className="lg:col-span-1 order-2 lg:order-1 lg:pt-16 flex flex-col gap-6 w-full">
            <GetExpenses 
              foodBudget={foodBudget} setFoodBudget={setFoodBudget}
              transportBudget={transportBudget} setTransportBudget={setTransportBudget}
              billsBudget={billsBudget} setBillsBudget={setBillsBudget}
              entertainmentBudget={entertainmentBudget} setEntertainmentBudget={setEntertainmentBudget}
              healthBudget={healthBudget} setHealthBudget={setHealthBudget}
              otherBudget={otherBudget} setOtherBudget={setOtherBudget}
              onAddTransaction={handleAddTransaction} // Passes functional hook reference down as prop
            />

            <ShortTransactionHistry transactions={transactions} />
          </div>

          {/*  RIGHT COLUMN: REAL-TIME FINANCIAL MONITORING CARDS */}
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
              initialTotalBudget={initialTotalBudget} // Bound dependency parameters used for chart tracking hooks
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainDashboardPage;