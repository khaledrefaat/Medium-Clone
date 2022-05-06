import { ReactChild } from 'react';

interface DividerElementProps {
  children: ReactChild;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const DividerButton: React.FC<DividerElementProps> = ({
  children,
  active,
  className,
  onClick,
}) => {
  return (
    <button
      className={`${className ? className : ''} ${
        active ? 'font-medium' : 'text-gray-500'
      } capitalize`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DividerButton;
