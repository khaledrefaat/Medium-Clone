import { ReactChild } from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: ReactChild;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        className ? className : ''
      } py-1 px-4 rounded-3xl text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
