import React from 'react';
import UsersList from '../components/UsersList';

export default class UsersPage extends React.Component {
  render() {
    return (
      <>
      <h1 className="desc">
        Users
      </h1>
      { 
        (!this.props.children) 
        ?
        <UsersList></UsersList>
        :
        this.props.children
      }
      </>
    );
  }
}