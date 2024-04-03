import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Service Home</Link> 
        <ul className="flex space-x-6">
          {/* Assuming you'll replace these with your actual links */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-products">All Products</Link></li>
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
