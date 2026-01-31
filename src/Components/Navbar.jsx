import React, { useState } from 'react';
import './Comps.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='nav'>
      <div className="nav1">
        <h1>Hadia</h1>

        
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <Link to='/' className='link' onClick={() => setIsOpen(false)}>Home</Link>
          <Link to='/Projects' className='link' onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to='/Contact' className='link' onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

     
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
