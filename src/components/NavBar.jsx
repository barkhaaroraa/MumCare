import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from '../assets/images/logo.png';
import "../index.css"

const NavBar = () => {
  const {pathname} = useLocation()
  return (
    <nav className="flex items-center justify-between bg-gradient-to-br from-pink-600 via-pink-400 to-pink-800 py-2 px-4" style={{ fontFamily: 'Poppins, Montserrat, sans-serif' }}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-16 w-auto mr-4 ml-2" />
        <span style={{
          fontWeight: 'bold',
          fontSize: '32px',
          color: '#FFFFDE',
          lineHeight: '50px',
          paddingLeft: '30px',
          textDecoration: 'none'
        }}>
          MumCares
        </span>
      </div>
      <div className="flex items-center">
      <ul className="flex space-x-4 text-pink-300">
        <li className="ml-auto">
        <NavLink to="/" className={`text-lg ${pathname === '/' ? 'active-link' : 'hover:border-b-2'}`} style={{ color: '#FFFFDE', fontSize: '22px'}}>Home</NavLink> 
        </li>
        <li>
        <NavLink to="/relax" className={`text-lg ${pathname === '/relax' ? 'active-link' : 'hover:border-b-2'}`} style={{ color: '#FFFFDE', fontSize: '22px' }}>Relaxation</NavLink> 
        </li>
        <li>
        <NavLink to="/postpartum-recovery" className={`text-lg ${pathname === '/postpartum-recovery' ? 'active-link' : 'hover:border-b-2'}`} style={{ color: '#FFFFDE', fontSize: '22px' }}>Postpartum</NavLink> 
        </li>
        <li>
        <NavLink to="/yoga" className={`text-lg ${pathname === '/yoga' ? 'active-link' : 'hover:border-b-2'}`} style={{ color: '#FFFFDE', fontSize: '22px' }}>Yoga</NavLink> 
        </li>
        <li>
        <NavLink to="/community" className={`text-lg ${pathname === '/community' ? 'active-link' : 'hover:border-b-2'}`} style={{ color: '#FFFFDE', fontSize: '22px' }}>Community</NavLink> 
        </li>
        {/* <li>
        <NavLink to="/depression" className={`text-lg ${pathname === '/depression' ? 'active-link' : 'hover:border-b-2'}`} style={{ color: '#FFFFDE', fontSize: '22px' }}>Depression</NavLink> 
        </li> */}
      </ul>
      <button className="bg-pink-200 text-pink-500 hover:text-pink-200 hover:bg-[#e45a88] px-4 py-3 rounded-md font-semibold text-xl ml-6" onClick={() => window.location.href = 'templates/chat.html'}>
        ANALYSE
      </button>
      </div>
    </nav>
  );
}

export default NavBar;
