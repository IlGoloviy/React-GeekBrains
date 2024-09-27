import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  return (
    <nav className="menu">
      <Link to="/" className="menu-logo">
        <img src={props.src} />
      </Link>
      <ul className="menu-items">
        {props.children}  
      </ul>
    </nav>
  );
}

export default Menu;