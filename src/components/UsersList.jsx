import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import User from '../components/User';
import { fetchUsers } from '../actions/userActions';

const UsersList = props => {
  useEffect(() => {
    if (!props.users.length) {
      props.dispatch(fetchUsers());
    }
  }, []);

  if (!props.users.length) {
    return (
      <div className="blank-page">
        <div className="spiner"></div>
      </div>
    );
  } else {
    const users = props.users.map(user => {
      return <User key={user.id} user={user}></User>
    });

    return (
      <div className="user-list">
        {users}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(UsersList);