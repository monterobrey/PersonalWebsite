// components/Footer.js
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© {year} Your Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;