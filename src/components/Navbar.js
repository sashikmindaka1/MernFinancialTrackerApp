import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img src="/assests/logo.png" alt="Logo" className='nav-logo'></img>
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