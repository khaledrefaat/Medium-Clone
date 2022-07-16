import { calculateDaysFromToday } from '../../lib/util';
import UserImage from '../Ui/UserImage';
import { useState } from 'react';
import CommentContainer from './CommentContainer';

interface CommentItemProps {
  img: string;
  author: string;
  date: string;
  comment: string;
}

const CommentItem: React.FC<CommentItemProps> = ({
  img,
  author,
  date,
  comment,
}) => {
  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <CommentContainer className="mt-5 shadow-md p-3">
      <div className="flex items-center">
        <UserImage src={img} height={35} width={35} />
        <div className="ml-2">
          <p>{author}</p>
          <p className="text-gray-500 text-sm">
            {calculateDaysFromToday(date)} Days ago
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-neutral-800">
        {comment.length > 250 && !showMoreText
          ? comment.substring(0, 250) + '...'
          : comment}
      </p>
      {comment.length > 250 && (
        <p className="font-medium text-sm text-green-600 cursor-pointer mt-1">
          {showMoreText ? (
            <span onClick={() => setShowMoreText(false)}>Show Less</span>
          ) : (
            <span onClick={() => setShowMoreText(true)}>Show More</span>
          )}
        </p>
      )}
    </CommentContainer>
  );
};

export default CommentItem;
