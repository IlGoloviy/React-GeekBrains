import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/" className="menu-logo">
          <img src={this.props.src} />
        </Link>
        <ul className="menu-items">
          {this.props.children}  
        </ul>
      </nav>
    );
  }
}