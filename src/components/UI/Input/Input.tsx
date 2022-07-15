import React, { useState } from 'react';
import styles from './Input.module.scss';

type BaseProps = {
  type?: 'text' | 'email' | 'password',
  value: string,
  name: string,
  placeholder: string,
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type InputProps = BaseProps & {
  showLabel?: boolean,
  label?: string,
} | BaseProps & {
  showLabel: boolean,
  label: string,
}

const Input = ({
  type = 'text', showLabel, label, value, changeHandler, name, placeholder,
}: InputProps) => {
  const [showPasssword, setShowPassword] = useState(false);

  const passwordInputType = showPasssword ? 'text' : type;

  return (
    <div className={styles.inputContainer}>
      {showLabel && <label className={styles.inputLabel} htmlFor={name}>{label}</label>}
      <input className={styles.input} placeholder={placeholder} type={type !== 'password' ? type : passwordInputType} id={name} value={value} onChange={changeHandler} />
      {type === 'password' && (
        <button className={styles.showPassBtn} type="submit" onClick={() => setShowPassword((prevState) => !prevState)}>Show password</button>
      )}
    </div>
  );
};

export default Input;
