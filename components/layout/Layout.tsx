import React, { ReactNode } from 'react';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">{children}</main>
    </>
  );
};

export default Layout;
