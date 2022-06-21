import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
// import api from '../../../api';
import styles from './Signup.module.scss';
import Input from '../../UI/Input/Input';
import { userContext } from '../../../contexts/user/UserContext';

const Signup = () => {
  const router = useRouter();
  const { signup } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');

  const signupHandler = async () => {
    const success = await signup({
      email, password, confirmPassword, fullName, username,
    });
  };

  return (
    <>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <Input placeholder="FullName" value={fullName} name="fullname" changeHandler={(e) => setFullName(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Username" value={username} name="username" changeHandler={(e) => setUsername(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Email" type="email" value={email} name="email" changeHandler={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Password" type="password" value={password} name="password" changeHandler={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.inputContainer}>
          <Input placeholder="Confirm password" type="password" value={confirmPassword} name="confirmPassword" changeHandler={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button className={styles.form__submitBtn} type="submit" onClick={signupHandler}>Signup</button>
      </div>
      <button type="submit" onClick={() => router.push('/login')}>Login</button>
    </>
  );
};

export default Signup;
