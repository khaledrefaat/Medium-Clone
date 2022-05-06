import { ReactChild } from 'react';

interface SectionHeadingProps {
  className?: string;
  children: ReactChild;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  className,
  children,
}) => {
  return (
    <h1
      className={`${
        className ? className : ''
      } text-4xl font-extrabold font-sans`}
    >
      {children}
    </h1>
  );
};

export default SectionHeading;
