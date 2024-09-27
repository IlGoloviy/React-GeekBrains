import React, { useState } from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import routes from '../routes';
import { Route, Switch } from 'react-router-dom';

const Layout = props => {
  const [active, setActive] = useState({});
  const src = "https://i.pravatar.cc/75?img=2";
  
  function isActive(href) {
    return window.location.pathname === href;
  }

  const click = () => {
    setActive({active: null});
  }

  return (
    <>
    <div onClick={click}>
    <Menu src={src}>
      <MenuItem href="/" active={isActive("/")}>Main</MenuItem>
      <MenuItem href="/users" active={isActive("/users")}>Users</MenuItem>
      <MenuItem href="/posts" active={isActive("/posts")}>Posts</MenuItem>
      <MenuItem href="/comments" active={isActive("/comments")}>Comments</MenuItem>
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

export default Layout;