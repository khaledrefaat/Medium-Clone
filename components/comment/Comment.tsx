import Modal from '../modal/Modal';
import Close from '../icons/close.svg';
import CommentItem from './CommentItem';
import CommentField from './CommentField';
import CommentContainer from './CommentContainer';
import { useSession } from 'next-auth/react';
import { Comment, Session } from '../../typings';

interface CommentProps {
  hideComment: () => void;
  postId: string;
  comments: Comment[];
}

const Comment: React.FC<CommentProps> = ({ hideComment, postId, comments }) => {
  const { data: session } = useSession();

  const handelCommentSubmit = async (comment: string) => {
    // i have edited the user type definition because i could'nt do it the normal way <Session> or as Session
    const commentData = {
      userId: session?.user?._id,
      postId,
      name: session?.user?.name,
      imageSrc: session?.user?.image,
      comment,
    };
    try {
      const res = await fetch('/api/new-comment', {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      hideModal={hideComment}
      className=" bg-gray-700/10 z-50 cursor-pointer"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="fixed bg-white h-5/6 overflow-y-scroll w-screen sm:h-screen sm:w-2/4 lg:w-1/3 xl:w-1/4 shadow-xl right-0 sm:top-0 bottom-0 cursor-auto"
      >
        <CommentContainer>
          <div className="flex justify-between w-full items-center mt-5">
            <h2 className="capitalize font-semibold text-2xl">
              responses <span className="text-xl">(2)</span>
            </h2>
            <Close className="cursor-pointer" onClick={hideComment} />
          </div>
        </CommentContainer>
        <CommentField
          onSubmit={handelCommentSubmit}
          img={session?.user?.image as string}
          author={session?.user?.name as string}
        />

        {comments.map(
          ({ _id, comment, imageSrc, _updatedAt, userId, name }) => (
            <CommentItem
              key={_id}
              author={name}
              img={imageSrc}
              date={_updatedAt}
              comment={comment}
            />
          )
        )}
      </div>
    </Modal>
  );
};

export default Comment;
