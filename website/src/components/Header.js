// components/Header.js
import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <header className="bg-dark text-white">
      <div className="container py-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">Your Name</h1>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;