import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
// import api from '../../../api';
import { userContext } from '../../../contexts/user/UserContext';
import styles from './Login.module.scss';
import Input from '../../UI/Input/Input';

const Login = () => {
  const router = useRouter();
  const { login } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signupHandler = async () => {
    const success = await login({
      email, password,
    });
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <Input placeholder="Email" type="email" value={email} name="email" changeHandler={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Password" type="password" value={password} name="password" changeHandler={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.form__submitBtn} type="submit" onClick={signupHandler}>Login</button>
      </div>
      <button type="submit" onClick={() => router.push('/signup')}>Signup</button>
    </>
  );
};

export default Login;
