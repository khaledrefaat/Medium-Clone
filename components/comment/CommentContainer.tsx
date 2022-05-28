import { ReactNode } from 'react';

interface CommentContainerProps {
  children: ReactNode;
  className?: string;
}

const CommentContainer: React.FC<CommentContainerProps> = ({
  children,
  className,
}) => {
  return <div className={`${className ? className : ''} mx-3`}>{children}</div>;
};

export default CommentContainer;
