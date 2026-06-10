
import './App.css';
import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, RouterProvider, createBrowserRouter} from 'react-router-dom';
import OnboardingSetupPage from './pages/OnboardingSetupPage';
import MainDashboardPage from './pages/MainDashboardPage';
import AnalyticsInsightsPage from './pages/AnalyticsInsightsPage';
import Homepage from './pages/Homepage';
import TransactionsHistoryPage from './pages/TransactionsHistoryPage';  
import SpecialGoal from './pages/SpecialGoal';  



const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children: [

      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "/OnboardingSetupPage",
        element: <OnboardingSetupPage />
      },
      {
        path: "/MainDashboardPage",
        element: <MainDashboardPage />
      },
      {
        path: "/Analytics&InsightsPage",
        element: <AnalyticsInsightsPage />
      },
      {
        path: "/TransactionsHistoryPage",
        element: <TransactionsHistoryPage />
      },

      {
        path: "/SpecialGoalsPage",
        element: <SpecialGoal />
      }

    ]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
} export default App;






