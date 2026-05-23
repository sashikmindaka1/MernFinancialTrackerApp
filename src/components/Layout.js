import Navbar from './Navbar';
import react from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';  

function Layout() {
  return(
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}export default Layout;