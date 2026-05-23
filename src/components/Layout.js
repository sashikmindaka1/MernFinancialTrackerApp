import Navbar from './Navbar';
import react from 'react';
import {Outlet} from 'react-router-dom';

function Layout() {
  return(
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}export default Layout;