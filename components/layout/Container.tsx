import React, { ReactNode } from 'react';

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="xl md:mx-10">{children}</div>;
};

export default Container;
