import React, {useContext} from 'react';
import AuthContext from '../../context/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const new_props = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {new_props.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {new_props.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {new_props.isLoggedIn && (
          <li>
            <button onClick={new_props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
 
export default Navigation;
