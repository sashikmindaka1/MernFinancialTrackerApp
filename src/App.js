
import './App.css';
import React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, RouterProvider} from 'react-router-dom';
import OnboardingSetupPage from './pages/OnboardingSetupPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveUsers from './components/LiveUsers';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children: [

      {
        path: "/",
        element: <OnboardingSetupPage />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/features",
        element: <Features />
      }

    ]
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
} export default App;






