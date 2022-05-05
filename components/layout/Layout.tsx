import React, { ReactNode, useRef } from 'react';
import SuggestBar from '../SuggestBar/SuggestBar';
import Header from './Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const hideMenuRef = useRef<VoidFunction>(null);

  const handelMenu = () => {
    if (typeof hideMenuRef.current === 'function') {
      hideMenuRef.current();
    }
  };

  return (
    <div className="lg:flex lg:h-full lg:w-full">
      <Header hideMenuRef={hideMenuRef} />
      <main onClick={handelMenu} className="overflow-x-hidden lg:flex-1">
        {children}
      </main>
      <SuggestBar />
    </div>
  );
};

export default Layout;
