import React from 'react';
import { connect } from 'react-redux';

import User from '../components/User';
import { fetchUsers } from '../actions/userActions';

class UsersList extends React.Component {
 
  render() {
    if (!this.props.users.length) {
      return (
        <div className="blank-page">
          <div className="spiner"></div>
        </div>
      );
    } else {
      const users = this.props.users.map(user => {
        return <User key={user.id} user={user}></User>
      });

      return (
        <div className="user-list">
          {users}
        </div>
      );
    }
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.dispatch(fetchUsers());
    }
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.users
  }
}

export default connect(mapStateToProps)(UsersList);