import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import routes from '../routes';
import {Route, Switch} from 'react-router-dom';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.src = "https://i.pravatar.cc/75?img=2";
    this.click = this.click.bind(this);
  }
  
  isActive(href) {
    return window.location.pathname === href;
  }

  click() {
    this.setState({active: null});
  }

  render() {
    return (
      <>
      <div onClick={this.click}>
      <Menu src={this.src}>
        <MenuItem href="/" active={this.isActive("/")}>Main</MenuItem>
        <MenuItem href="/users" active={this.isActive("/users")}>Users</MenuItem>
        <MenuItem href="/posts" active={this.isActive("/posts")}>Posts</MenuItem>
        <MenuItem href="/comments" active={this.isActive("/comments")}>Comments</MenuItem>
      </Menu>
      </div>
      <div className="container">
        <Switch>
          {routes.map((route, key) => {
            return <Route key={key} {...route} />
          })}
        </Switch>
      </div>
      <footer className="footer">
        &copy; 2019 blog Malysha
      </footer>
      </>
    );
  }
}

export default Layout;