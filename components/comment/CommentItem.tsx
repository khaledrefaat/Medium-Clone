import { getDay } from '../../lib/util';
import UserImage from '../Ui/UserImage';
import Like from '../icons/like.svg';
import Comment from '../icons/comment.svg';
import { useState } from 'react';
import CommentField from './CommentField';

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

  const handelCommentSubmit = (comment: string) => console.log(comment);

  const hideComment = () => {
    console.log('working');
    setShowCommentArea(false);
  };

  const toggleComment = () =>
    setShowCommentArea(showCommentArea => !showCommentArea);

  return (
    <div className="mt-8">
      <div className="flex items-center">
        <UserImage src={img} height={35} width={35} />
        <div className="ml-2">
          <p>{author}</p>
          <p className="text-gray-500 text-sm">{getDay(date)} Days ago</p>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-neutral-800">
        {description.length > 250
          ? description.substring(0, 250) + '...'
          : description}
      </p>
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
          className="ml-3 my-5"
        >
          <div className="absolute -left-5 top-0 h-full bg-slate-200 w-0.5" />
        </CommentField>
      )}
    </div>
  );
};

export default CommentItem;
