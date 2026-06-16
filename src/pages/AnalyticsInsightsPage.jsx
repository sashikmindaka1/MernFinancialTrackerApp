import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Calendar from "react-calendar";

// Register Core ChartJS modules along with the dynamic DataLabels plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

function AnalyticsInsightsPage() {
  // States for calendar popup mechanics
  const [isCalOpen, setIsCalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const calRef = React.useRef(null);

  // Close calendar popup cleanly when user clicks anywhere outside the card area
  useEffect(() => {
    function handleClickOutside(event) {
      if (calRef.current && !calRef.current.contains(event.target)) {
        setIsCalOpen(false);
      } 
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // State variables for expense items
  const [food, setFood] = useState(0);
  const [transport, setTransport] = useState(0);
  const [bills, setBills] = useState(0);
  const [entertainment, setEntertainment] = useState(0);
  const [health, setHealth] = useState(0);
  const [other, setOther] = useState(0);

  // State variables for overall income vs total expenses metrics
  const [income, setIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  // Read raw tracking data values straight from localStorage state hydration
  useEffect(() => {
    const foodVal = Number(localStorage.getItem("currentFoodBudget")) || 0;
    const transportVal = Number(localStorage.getItem("currentTransportBudget")) || 0;
    const billsVal = Number(localStorage.getItem("currentBillsBudget")) || 0;
    const entertainmentVal = Number(localStorage.getItem("currentEntertainmentBudget")) || 0;
    const healthVal = Number(localStorage.getItem("currentHealthBudget")) || 0;
    const otherVal = Number(localStorage.getItem("currentOtherBudget")) || 0;

    setFood(foodVal);
    setTransport(transportVal);
    setBills(billsVal);
    setEntertainment(entertainmentVal);
    setHealth(healthVal);
    setOther(otherVal);

    // Calculate sum aggregation dynamically for total expenses comparison
    setTotalExpenses(foodVal + transportVal + billsVal + entertainmentVal + healthVal + otherVal);
    
    // Fetch user income setup value from onboarding storage configurations
    setIncome(Number(localStorage.getItem("userIncome")) || 0);
  }, []);

  // Compute total savings metric dynamically
  const savings = income - totalExpenses;

  // Premium Doughnut UI configuration structures mapping to the layout image specifications
  const DhonutGraphData = {
    labels: ["Food & Dining", "Bills & Utilities", "Transport", "Shopping", "Entertainment", "Health"],
    datasets: [                    
      {
        label: "Budget Share",
        data: [food, bills, transport, other, entertainment, health], 
        backgroundColor: [
          "rgba(0, 229, 255, 0.2)",   // Cyan matching Food & Dining arc glow
          "rgba(0, 140, 255, 0.2)",   // Darker Cyan/Blue for Bills & Utilities
          "rgba(16, 185, 129, 0.2)",  // Emerald Green for Transport tracking
          "rgba(245, 158, 11, 0.2)",  // Orange for Shopping/Other allocation
          "rgba(239, 68, 68, 0.2)",   // Light Rose Red for Entertainment 
          "rgba(139, 92, 246, 0.2)"   // Purple Accent representation for Health
        ],
        borderColor: [
          "#00e5ff", 
          "#008cff", 
          "#10b981", 
          "#f59e0b", 
          "#ef4646", 
          "#8b5cf6"
        ],
        borderWidth: 2,
        cutout: "70%", 
      },
    ],
  };

  const DhonutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,  
        position: "bottom", 
        labels: {
          color: "#9ca3af", 
          font: { size: 11, weight: "600" },
          padding: 16,
          usePointStyle: true,
          pointStyle: "circle"
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#161920",
        titleColor: "#00e5ff",
        bodyColor: "#fff",
        borderColor: "#232836",
        borderWidth: 1,
      },
      datalabels: {
        display: true,
        color: "#ffffff",
        font: { weight: "bold", size: 12 },
        formatter: (value, context) => {
          const dataArray = context.dataset.data;
          const totalSum = dataArray.reduce((a, b) => a + b, 0);
          if (totalSum === 0) return "";
          const percentage = ((value / totalSum) * 100).toFixed(0);
          return percentage > 0 ? `${percentage}%` : "";
        }
      }
    }
  };

  // Bar Chart Configuration Data Structure for Income vs Expenses Visuals
  const BarGraphData = {
    labels: ["Monthly Income", "Expenses"],
    datasets: [
      {
        label: "Amount (Rs.)",
        data: [income, totalExpenses],
        backgroundColor: [
          "rgba(16, 185, 129, 0.5)",  // Emerald Green for Income bar
          "rgba(0, 229, 255, 0.5)"    // Cyan color fill matching Expenses bar
        ],
        borderColor: [
          "#10b981",
          "#00e5ff"
        ],
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 55,
      }
    ]
  };

  // Custom configuration for clean tracking layout labels on top of bars
  const BarChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: "#161920",
        bodyColor: "#fff",
      },
      datalabels: {
        display: true,
        color: "#ffffff",
        anchor: "end",
        align: "top",
        offset: 4,
        font: { weight: "bold", size: 12 },
        formatter: (value) => `Rs. ${value.toLocaleString()}`
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#9ca3af", font: { weight: "600" } }
      },
      y: {
        grid: { color: "rgba(35, 40, 58, 0.2)" },
        ticks: { color: "#6b7280" },
        suggestedMax: Math.max(income, totalExpenses) * 1.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white pt-24 p-4 font-sans antialiased">
      <div className="w-full max-w-[100%] mx-auto px-2 md:px-4">
        
        {/* PAGE HEADER SECTION WITH RESPONSIVE ALIGNMENT & FLOATING POPUP CALENDAR */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between border-b border-[#232836]/60 pb-6 gap-4 relative">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-[#00e5ff] uppercase tracking-widest bg-[#00e5ff]/10 px-3 py-1.5 rounded-full border border-[#00e5ff]/20">
              Analytics Studio
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mt-4">
              SMART WEALTH PLANNING:{" "}
              <span className="bg-gradient-to-r from-[#00e5ff] to-[#0072ff] bg-clip-text text-transparent">
                Visualize Your Financial Dreams
              </span>
            </h1>
            <p className="text-gray-400 text-sm mt-2">
              Analyze your income distribution, spending burn rates, and financial trends instantly.
            </p>
          </div>

          {/*  CALENDAR DROP-DOWN CONTAINER PINNED TO THE RIGHT CORNER */}
          <div className="relative self-center md:self-end z-30" ref={calRef}>
            <button
              onClick={() => setIsCalOpen(!isCalOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#161920]/90 border border-[#232836] hover:border-[#00e5ff]/40 rounded-xl transition-all text-sm font-semibold tracking-wide text-gray-300 hover:text-white shadow-xl backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
            </button>

            {/* FLOATING CALENDAR COMPONENT POPUP */}
            {isCalOpen && (
              <div className="absolute right-0 mt-3 p-4 bg-[#161920] border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-2xl w-[310px] transform origin-top-right transition-all duration-200">
                <div className="text-xs font-bold text-[#00e5ff] uppercase tracking-wider mb-3 text-center border-b border-[#232836] pb-2">
                  Select Calendar View
                </div>
                {/* Embedded Library Block with Tailwind inline theme color overrides */}
                <div className="custom-dark-calendar text-sm">
                  <Calendar
                    onChange={(date) => {
                      setSelectedDate(date);
                      setIsCalOpen(false); // Close modal panel right after input selection
                    }}
                    value={selectedDate}
                    className="border-none bg-transparent text-white w-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* 📊 MAIN SPLIT GRID CONTAINER - Spans full screen width and pins cards to the corners */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          
          {/* LEFT BOX: MONTHLY SPENDING BREAKDOWN */}
          <div className="p-6 md:p-8 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:border-[#00e5ff]/20 h-[500px]">
            <div className="absolute -inset-px bg-gradient-to-r from-[#00e5ff]/5 to-[#0072ff]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            <div className="mb-4 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#00e5ff] uppercase tracking-widest bg-[#00e5ff]/10 px-2.5 py-1 rounded-md border border-[#00e5ff]/20">
                   Expense Allocation
                </span>
                <h3 className="text-lg font-bold text-white mt-3 tracking-wide uppercase">
                  Monthly Spending Breakdown
                </h3>
              </div>
              <button className="text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="w-full h-[340px] flex items-center justify-center relative z-10 my-auto p-2">
              <Doughnut data={DhonutGraphData} options={DhonutChartOptions} />
            </div>
          </div>

          {/* RIGHT BOX: INCOME VS. EXPENSES WITH DYNAMIC SAVINGS LABEL */}
          <div className="p-6 md:p-8 bg-[#161920]/80 border border-[#232836] rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group transition-all duration-300 hover:border-[#10b981]/20 h-[500px]">
            <div className="absolute -inset-px bg-gradient-to-r from-[#10b981]/5 to-[#00e5ff]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />
            <div className="mb-4 relative z-10 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-[#10b981] uppercase tracking-widest bg-[#10b981]/10 px-2.5 py-1 rounded-md border border-[#10b981]/20">
                     Cash Flow Analysis
                  </span>
                  {savings > 0 && !isNaN(savings) && (
                    <span className="text-[11px] font-bold text-[#10b981] bg-[#10b981]/15 px-2.5 py-0.5 rounded-md border border-[#10b981]/30 whitespace-nowrap inline-block max-w-max tracking-wide">
                      Saving: Rs. {savings.toLocaleString()}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mt-3 tracking-wide uppercase">
                  Income Vs. Expenses
                </h3>
              </div>
              <button className="text-gray-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
            
            <div className="w-full h-[340px] relative z-10 my-auto p-2">
              <Bar data={BarGraphData} options={BarChartOptions} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AnalyticsInsightsPage;