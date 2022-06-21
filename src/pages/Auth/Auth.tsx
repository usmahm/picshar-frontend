import React, { useState } from 'react';
import Login from '../../components/Auth/Login/Login';
// import Loginfrom '../../components/Auth/Login/Login';
import Signup from '../../components/Auth/Signup/Signup';

const Auth = () => {
  const name = 'Auth';
  const [page, setPage] = useState<'SIGNUP' | 'LOGIN'>('SIGNUP');
  return (
    <div>
      <p>{name}</p>
      {page === 'SIGNUP' && <Signup changeAuthPageHandler={() => setPage('LOGIN')} />}
      {page === 'LOGIN' && <Login changeAuthPageHandler={() => setPage('SIGNUP')} />}
    </div>
  );
};

export default Auth;
