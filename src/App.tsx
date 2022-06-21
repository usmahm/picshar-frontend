import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContextProvider from './contexts/user/UserContext';
import Auth from './pages/Auth/Auth';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Page404 from './pages/Page404';
import Layout from './pages/Layout/Layout';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Feed />} />
            <Route path="auth" element={<Auth />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
