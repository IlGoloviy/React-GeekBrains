import React from 'react';
import UsersList from '../components/UsersList';

const UsersPage = props => {
  return (
    <>
    <h1 className="desc">
      Users
    </h1>
    { 
      (!props.children) 
      ?
      <UsersList></UsersList>
      :
      props.children
    }
    </>
  );
}

export default UsersPage;