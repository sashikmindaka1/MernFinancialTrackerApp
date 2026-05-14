import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className='nav-logo'>
        Home
      </div>
      
        <ul className="nav-links">
          <li>Services</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
      
      <div className='loginbtn1'><button>Login</button></div>
    </nav>
  )
}export default Navbar;