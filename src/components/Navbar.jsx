import { Link } from 'react-router-dom';
import '../index.css';
function Navbar() {
  return (
    // bg-white/10 සහ backdrop-blur-md එකෙන් Glassmorphism එක ලස්සනට එනවා
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between items-center px-10 py-2 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg">
      
      {/* LOGO AREA */}
      <div className="flex items-center">
        <Link to="/">
          <img src="/assests/logo.png" alt="Logo" className="h-[75px] w-auto" />
        </Link>
      </div>
      
      {/* NAV LINKS */}
      <ul className="flex justify-center gap-10 list-none m-0 p-0">
        <li>
          <Link to="/OnboardingSetupPage" className="text-[14px] text-[#0ede1f] font-bold no-underline uppercase tracking-wider inline-block transition-all duration-300 ease-in-out hover:text-[#00d2ff] hover:-translate-y-1">
            Onboarding Setup
          </Link>
        </li>
        <li>
          <Link to="/MainDashboardPage" className="text-[14px] text-[#0ede1f] font-bold no-underline uppercase tracking-wider inline-block transition-all duration-300 ease-in-out hover:text-[#00d2ff] hover:-translate-y-1">
            Main Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Analytics&InsightsPage" className="text-[14px] text-[#0ede1f] font-bold no-underline uppercase tracking-wider inline-block transition-all duration-300 ease-in-out hover:text-[#00d2ff] hover:-translate-y-1">
            Analytics & Insights
          </Link>
        </li>
        <li>
          <Link to="/TransactionsHistoryPage" className="text-[14px] text-[#0ede1f] font-bold no-underline uppercase tracking-wider inline-block transition-all duration-300 ease-in-out hover:text-[#00d2ff] hover:-translate-y-1">
            Transactions History
          </Link>
        </li>
      </ul>
      
      {/* LOGIN BUTTON */}
      <div>
        <Link to="/login">
          <button className="bg-[#63dc27] text-white border-2 border-black py-2 px-6 text-[15px] font-bold rounded-full cursor-pointer uppercase tracking-wider transition-all duration-300 ease-in-out hover:bg-black hover:text-[#63dc27] hover:border-[#63dc27] hover:-translate-y-0.5">
            Login
          </button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;