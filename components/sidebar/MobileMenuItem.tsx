import { ReactNode } from 'react';

interface MobileMenuItemProps {
  className?: string;
  children?: ReactNode;
  signOut?: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  className,
  children,
  signOut,
}) => {
  return (
    <div
      className={`cursor-pointer mb-7 ${className && className}`}
      onClick={signOut}
    >
      {children}
    </div>
  );
};

export default MobileMenuItem;
