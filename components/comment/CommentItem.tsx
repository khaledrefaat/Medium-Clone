import { getDay } from '../../lib/util';
import UserImage from '../Ui/UserImage';
import Like from '../icons/like.svg';
import Comment from '../icons/comment.svg';
import { useState } from 'react';
import CommentField from './CommentField';
import CommentContainer from './CommentContainer';

interface CommentItemProps {
  img: string;
  author: string;
  date: string;
  description: string;
  likes?: number;
  replies?: number;
}

const CommentItem: React.FC<CommentItemProps> = ({
  img,
  author,
  date,
  description,
  likes,
  replies,
}) => {
  const [showCommentArea, setShowCommentArea] = useState(false);
  const [showMoreText, setShowMoreText] = useState(false);

  const handelCommentSubmit = (comment: string) => console.log(comment);

  const hideComment = () => {
    console.log('working');
    setShowCommentArea(false);
  };

  const toggleComment = () =>
    setShowCommentArea(showCommentArea => !showCommentArea);

  return (
    <CommentContainer className="mt-5 shadow-md p-3">
      <div className="flex items-center">
        <UserImage src={img} height={35} width={35} />
        <div className="ml-2">
          <p>{author}</p>
          <p className="text-gray-500 text-sm">{getDay(date)} Days ago</p>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-neutral-800">
        {description.length > 250 && !showMoreText
          ? description.substring(0, 250) + '...'
          : description}
      </p>
      {description.length > 250 && (
        <p className="font-medium text-sm text-green-600 cursor-pointer mt-1">
          {showMoreText ? (
            <span onClick={() => setShowMoreText(false)}>Show Less</span>
          ) : (
            <span onClick={() => setShowMoreText(true)}>Show More</span>
          )}
        </p>
      )}
      <div className={`mt-5 flex ${replies ? '' : 'justify-between'}`}>
        <div className="flex items-center cursor-pointer">
          <Like className="h-5 w-5 mr-1" />
          {likes && <span>{likes}</span>}
        </div>
        {replies ? (
          <div
            onClick={toggleComment}
            className="flex ml-5 items-center cursor-pointer"
          >
            <Comment className="h-5 w-5 mr-1" />
            <span>{replies}</span>
          </div>
        ) : (
          <div className="font-medium cursor-pointer" onClick={toggleComment}>
            Replay
          </div>
        )}
      </div>
      {showCommentArea && (
        <CommentField
          author={author}
          img={img}
          onSubmit={handelCommentSubmit}
          hideComment={hideComment}
          className="ml-3 mt-5 mb-2"
        >
          <div className="absolute -left-4 top-0 h-full bg-slate-200 w-0.5" />
        </CommentField>
      )}
    </CommentContainer>
  );
};

export default CommentItem;
