import { useSession } from 'next-auth/react';
import React, { ReactNode, useRef } from 'react';
import SuggestBar from '../SuggestBar/SuggestBar';
import Header from './Header';
import classes from './Layout.module.css';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: session } = useSession();

  const hideMenuRef = useRef<VoidFunction>(null);

  const handelMenu = () => {
    if (typeof hideMenuRef.current === 'function') {
      hideMenuRef.current();
    }
  };

  return (
    <div className={`lg:flex lg:w-full ${classes.layout}`}>
      <Header hideMenuRef={hideMenuRef} />
      <main onClick={handelMenu} className="overflow-x-hidden lg:flex-1">
        {children}
      </main>
      {session && <SuggestBar />}
    </div>
  );
};

export default Layout;
