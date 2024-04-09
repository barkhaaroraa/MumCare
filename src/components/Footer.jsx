import React from 'react';

const Footer = () => {
  return (
    <footer className="flex mt-10 items-center justify-between bg-gradient-to-br from-pink-600 via-pink-400 to-pink-800 py-4 px-4" style={{ fontFamily: 'Poppins, Montserrat, sans-serif' }}>
      <div className="container mx-auto text-center">
        <p className="text-xl text-pink-100">&copy; 2024 MumCares. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
