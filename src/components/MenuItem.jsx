import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = props => {
  return (
    <li className={props.active ? "menu-item menu-active" : "menu-item"}>
      <Link className="menu-item-link" to={props.href}>
        {props.children}
      </Link>
    </li>
  );
}

export default MenuItem;