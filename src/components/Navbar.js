import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link to= "/">
         <img src="/assests/logo.png" alt="Logo" className='nav-logo'></img>
        </Link>
        
      </div>
      
        <ul className="nav-links">
          <li><Link to="/OnboardingSetupPage">Onboarding Setup</Link></li>
          <li><Link to="/MainDashboardPage">Main Dashboard</Link></li>
          <li><Link to="/Analytics&InsightsPage">Analytics & Insights</Link></li>
          <li><Link to="/TransactionsHistoryPage">Transactions History</Link></li>
        </ul>
      
      <div>
        <Link to="/login"><button className='loginbtn1'>Login</button></Link>
      </div>
    </nav>
  )
}export default Navbar;