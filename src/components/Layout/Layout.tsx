import React from 'react';
import NavBar from '../NavBar/NavBar';
// import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default Layout;
