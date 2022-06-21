import React, { useContext, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { userContext } from '../../contexts/user/UserContext';
import styles from './Layout.module.scss';

const Layout = () => {
  const { loggedIn, logout } = useContext(userContext);

  useEffect(() => {
    console.log('loggedIn', loggedIn);
  }, [loggedIn]);

  return (
    <>
      <nav className={styles.navigationBar}>
        <ul className={styles.listItems}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {loggedIn ? <button type="submit" onClick={logout} className={styles.logoutBtn}>Logout</button> : (
              <Link to="/auth">Login/Signup</Link>
            )}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
