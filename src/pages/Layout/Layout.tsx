import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.module.scss';

const Layout = () => {
  const isLoggedIn = true;
  return (
    <>
      <nav className={styles.navigationBar}>
        <ul className={styles.listItems}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={isLoggedIn ? 'profile' : '/auth'}>{isLoggedIn ? 'Profile' : 'Login/Signup'}</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
