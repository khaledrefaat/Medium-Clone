import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './PostItem.module.css';

interface PostItemProps {
  onBookmark?: () => void;
  imageSrc: string;
  userName: string;
  content: string;
  date: string;
  readingTime: number;
  tag: string;
  title: string;
}

const PostItem: React.FC<PostItemProps> = ({
  onBookmark,
  imageSrc,
  title: string,
  userName,
  content,
  date,
  readingTime,
  tag,
  title,
}) => {
  return (
    <li className="my-10 flex items-center">
      <div>
        <div className="flex items-center mb-3">
          <Image
            src="/jake.jpg"
            height={25}
            width={25}
            className="rounded-full"
          />
          <span className="text-xs sm:text-base font-medium ml-3">
            {userName}
          </span>
        </div>
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
          <Link href="/tag/Telegram-Chronicles-Donbas-and-its-War">
            <a>{title}</a>
          </Link>
        </h3>
        <p className="hidden sm:block text-gray-600 text-sm md:text-base">
          {content.substring(0, 165) + '...'}
        </p>
        <div className="mt-5 flex items-center">
          <span className=" text-gray-600 text-xs md:text-sm capitalize">
            {date} &#xB7;
          </span>
          <span className="mx-2 text-gray-600 text-xs md:text-sm">
            ${readingTime}min read &#xB7;
          </span>
          <Link href="/">
            <a className=" text-gray-600 text-xs md:text-sm py-1 px-2 bg-gray-200 rounded-xl capitalize">
              {tag}
            </a>
          </Link>
          <span className="ml-auto cursor-pointer" onClick={onBookmark}>
            <Image src="/icons/add-bookmark.svg" height={30} width={30} />
          </span>
        </div>
      </div>
      <div className={`ml-3 ${classes.post}`}>
        <Image src="/post-1.jpg" height="200" width="300" />
      </div>
    </li>
  );
};

export default PostItem;
