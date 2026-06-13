import React from "react";
//  register components in chart js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// Register elements inside ChartJS core
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AnalyticsInsightsPage() {
  
  // --- REAL-TIME CHART MOCK DATA ---
  // Income vs Expenses Bar Chart Data
  const barChartData = {
    labels: ["Total Income", "Total Expenses", "Net Savings"],
    datasets: [
      {
        label: "Amount (Rs.)",
        data: [150000, 120000, 30000], // 💡 උඹේ ඩෑෂ්බෝඩ් එකේ ගණන් වලට ගැලපෙන්න දැම්මා
        backgroundColor: [
          "rgba(16, 185, 129, 0.6)", // Emerald Green for Income
          "rgba(239, 68, 68, 0.6)",   // Rose Red for Expenses
          "rgba(0, 229, 255, 0.6)"    // Neon Blue for Savings
        ],
        borderColor: [
          "#10b981", 
          "#ef4646", 
          "#00e5ff"
        ],
        borderWidth: 2,
        borderRadius: 8, // Rounded chart bars
      },
    ],
  };

  // Chart Options for Premium Look
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // We don't need a top legend label for this simple graph
      },
    },
    scales: {
      y: {
        grid: { color: "rgba(35, 40, 58, 0.4)" },
        ticks: { color: "#9ca3af" } // Gray labels
      },
      x: {
        grid: { display: false },
        ticks: { color: "#9ca3af" }
      }
    }
  };

  return (
    //  Web Page Background Color changed cleanly to deep luxury premium dark theme [#0f1115]
    <div className="min-h-screen bg-[#0f1115] text-white pt-64 p-4 md:p-8 font-sans antialiased">
      <div className="max-w-6xl mx-auto px-2 md:px-6">
        
        {/* PAGE HEADER SECTION */}
        <div className="mb-20 text-center md:text-left border-b border-[#232836]/60 pb-6">
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

        {/* CHART GRID CARD CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          
          {/* CARD 1: INCOME VS EXPENSES COMPARISON */}

          <Doughnut

          label
           
          />

          
          

         
         

        </div>

      </div>
    </div>
  );
}

export default AnalyticsInsightsPage;