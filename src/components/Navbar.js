import './Navbar.css';
import logo from '../assests/logo.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src={logo} alt="Logo" className='nav-logo'></img>
      </div>
      
        <ul className="nav-links">
          <li>Services</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
      
      <div><button className='loginbtn1'>Login</button></div>
    </nav>
  )
}export default Navbar;