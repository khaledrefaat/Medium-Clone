const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={`${
        className ? className : ''
      } border-b border-gray-300 w-full`}
    />
  );
};

export default Divider;
