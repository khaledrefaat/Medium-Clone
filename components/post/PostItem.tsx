import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { imageLoader } from '../../lib/util';
import UserImage from '../Ui/UserImage';
import classes from './PostItem.module.css';
import AddBookmark from '../icons/add-bookmark.svg';

interface PostItemProps {
  onBookmark: () => void;
  authorImage: string;
  mainImage: string;
  author: string;
  description: string;
  date: string;
  readingTime: number;
  tag: string;
  title: string;
  id: string;
}

const PostItem: React.FC<PostItemProps> = ({
  onBookmark,
  authorImage,
  mainImage,
  title,
  author,
  description,
  date,
  readingTime,
  tag,
  id,
}) => {
  return (
    <li className="my-10 flex items-center">
      <div>
        <div className="flex items-center mb-3">
          <UserImage src={authorImage} loader />
          <span className="text-xs sm:text-base font-medium ml-3">
            {author}
          </span>
        </div>
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
          <Link href={`/post/${id}`}>
            <a>{title}</a>
          </Link>
        </h3>
        <p className="hidden sm:block text-gray-600 text-sm md:text-base">
          {description.substring(0, 165) + '...'}
        </p>
        <div className="mt-5 flex items-center">
          <span className=" text-gray-600 text-xs md:text-sm capitalize">
            {date} &#xB7;
          </span>
          <span className="mx-2 text-gray-600 text-xs md:text-sm">
            {readingTime}min read &#xB7;
          </span>
          <Link href="/">
            <a className=" text-gray-600 text-xs md:text-sm py-1 px-2 bg-gray-200 rounded-xl capitalize">
              {tag}
            </a>
          </Link>
          <span className="ml-auto cursor-pointer" onClick={onBookmark}>
            <AddBookmark className="w-7 h-7 fill-slate-500 hover:fill-slate-800" />
          </span>
        </div>
      </div>
      <div className={`ml-3 ${classes.post}`}>
        <Image loader={imageLoader} src={mainImage} height="200" width="300" />
      </div>
    </li>
  );
};

export default PostItem;
