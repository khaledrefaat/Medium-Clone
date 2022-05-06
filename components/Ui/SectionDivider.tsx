import { ReactNode } from 'react';
import Divider from './Divider';

interface SectionDivider {
  children: ReactNode;
  className?: string;
}

const SectionDivider: React.FC<SectionDivider> = ({ children, className }) => {
  return (
    <>
      <div className={`${className ? className : ''} flex mt-10`}>
        {children}
      </div>
      <Divider className="my-2" />
    </>
  );
};

export default SectionDivider;
