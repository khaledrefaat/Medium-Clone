import React from 'react';
import PostItem from './PostItem';

const PostList: React.FC<{ onBookmark: () => void }> = ({ onBookmark }) => {
  return (
    // mx-2 sm:m-0 list-none mt-10 w-full lg:w-2/3
    <ul className="w-full flex flex-col">
      <PostItem onBookmark={onBookmark} />
      <PostItem onBookmark={onBookmark} />
      <PostItem onBookmark={onBookmark} />
      <PostItem onBookmark={onBookmark} />
      <PostItem onBookmark={onBookmark} />
    </ul>
  );
};

export default PostList;
