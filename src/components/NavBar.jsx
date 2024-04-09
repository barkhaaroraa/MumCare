import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-pink-800 py-3 px-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-12 w-auto mr-4" />
        <span style={{
          fontWeight: 'bold',
          fontSize: '32px', // Adjusted font size for MumCares text
          color: 'rgb(211, 211, 185)',
          lineHeight: '50px',
          paddingLeft: '40px'
        }}>
          MumCares
        </span>
      </div>
      <ul className="flex space-x-4 text-pink-300">
        <li className="ml-auto">
          <Link to="/" className="text-lg italic" style={{ color: 'rgb(211, 211, 185)', fontSize: '22px' }}>Home</Link> {/* Adjusted font size */}
        </li>
        <li>
          <Link to="/postpartum-recovery" className="text-lg italic" style={{ color: 'rgb(211, 211, 185)', fontSize: '22px' }}>Postpartum</Link> {/* Adjusted font size */}
        </li>
        <li>
          <Link to="/relax" className="text-lg italic" style={{ color: 'rgb(211, 211, 185)', fontSize: '22px' }}>Relaxation</Link> {/* Adjusted font size */}
        </li>
      </ul>
      <button className="bg-pink-200 text-pink-500 px-4 py-2 rounded-md font-normal text-lg ml-2">
        ANALYSE
      </button>
    </nav>
  );
}

export default NavBar;
