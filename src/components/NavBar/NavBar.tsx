import React, { useContext } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';
import { userContext } from '../../contexts/user/UserContext';

const NavBar = () => {
  const { loggedIn, logout } = useContext(userContext);

  return (
    <nav className={styles.navigationBar}>
      <ul className={styles.listItems}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          {loggedIn ? <button type="submit" onClick={logout} className={styles.logoutBtn}>Logout</button> : (
            <Link href="/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
