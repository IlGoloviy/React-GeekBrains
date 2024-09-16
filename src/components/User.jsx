import React from 'react';
import { Link } from 'react-router-dom';

export default class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="user-card">
        <Link to={`/users/${user.id}`} className="user-card-link">
          <h3>{user.username}</h3>
        </Link>
        <h5>{user.name}</h5>
        <p className="user-card-email">
          <span>email</span>
          <span>{user.email}</span>
        </p>
        <p className="user-card-phone">
          <span>phone</span>
          <span>{user.phone}</span>
        </p>
        <p className="user-card-website">
          <span>website</span>
          <span>{user.website}</span>
        </p>
        <div className="user-card-tabledesc">
          <span>address</span>
        </div>
        <div className="user-card-tabletext">
          <span>{user.address.city}</span>
          <span>{user.address.street}</span>
          <span>{user.address.suite}</span>
        </div>
      </div>
    );
  }
}