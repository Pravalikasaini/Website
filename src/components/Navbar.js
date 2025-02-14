import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
