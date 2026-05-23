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
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      
      <div>
        <Link to="/login"><button className='loginbtn1'>Login</button></Link>
      </div>
    </nav>
  )
}export default Navbar;