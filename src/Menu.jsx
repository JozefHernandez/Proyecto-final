import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li><Link to="/">Phantom thieves</Link></li>
        <li><Link to="/about">Miembros</Link></li>
        <li><Link to="/contact">Formas de operacion</Link></li>
      </ul>
    </nav>
  );
};
export default Menu;