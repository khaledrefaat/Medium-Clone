import React, { ReactNode, useEffect, useRef } from 'react';
import Header from '../navbar/Header';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const hideMenuRef: any = useRef<any>();

  return (
    <div className="lg:flex lg:h-full lg:w-full">
      <Header hideMenuRef={hideMenuRef} />
      <main
        onClick={() => hideMenuRef.current()}
        className="overflow-x-hidden lg:flex-1"
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
