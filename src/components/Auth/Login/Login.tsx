import React from 'react';
import styles from './Login.module.scss';

const Login = () => {
  const name = 'Ahmad';
  return (
    <div className={styles.container}>
      <p>
        Login page
        {name}
      </p>
    </div>
  );
};

export default Login;
