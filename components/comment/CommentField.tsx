import UserImage from '../Ui/UserImage';
import { ReactNode, useState } from 'react';

interface CommentFieldProps {
  img: string;
  author: string;
  onSubmit: (comment: string) => void;
  hideComment?: () => void;
  className?: string;
  children?: ReactNode;
}

const CommentField: React.FC<CommentFieldProps> = ({
  img,
  author,
  onSubmit,
  hideComment,
  className,
  children,
}) => {
  const [showTextArea, setShowTextArea] = useState(hideComment ? true : false); // so it would always show the comment area when opening it from CommentItem
  const [term, setTerm] = useState('');

  const hideWritingArea = () =>
    hideComment ? hideComment() : setShowTextArea(false);

  const showWritingArea = () => setShowTextArea(true);

  return (
    <div
      className={`${
        className ? className : ''
      } mt-5 shadow-md p-3 rounded-md relative`}
    >
      {showTextArea && (
        <div className="flex items-center">
          <UserImage src={img} height={40} width={40} />
          <p className="capitalize ml-2">{author}</p>
        </div>
      )}
      <div className={`${showTextArea ? 'mt-5' : ''}`}>
        {showTextArea ? (
          <textarea
            placeholder="What are your thoughts"
            className="w-full outline-none mb-10 placeholder:text-sm"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        ) : (
          <input
            placeholder="What are your thoughts"
            className="w-full outline-none py-2 placeholder:text-sm"
            onClick={showWritingArea}
          />
        )}
      </div>
      {showTextArea && (
        <div className="flex justify-end">
          <button
            className="font-medium mr-3 text-sm"
            onClick={hideWritingArea}
          >
            Cancel
          </button>
          <button
            disabled={!showTextArea}
            className={`font-medium text-sm bg-green-700 text-white rounded-full pb-1.5 pt-1 px-3 ${
              term ? '' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={() => onSubmit(term)}
          >
            Respond
          </button>
        </div>
      )}
      {children}
    </div>
  );
};

export default CommentField;
