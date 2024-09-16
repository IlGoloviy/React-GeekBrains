import React from 'react';
import {Link} from 'react-router-dom';

export default class MenuItem extends React.Component {
  render() {
    return (
      <li className={this.props.active ? "menu-item menu-active" : "menu-item"}>
        <Link className="menu-item-link" to={this.props.href}>
          {this.props.children}
        </Link>
      </li>
    );
  }
}