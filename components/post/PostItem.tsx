import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './PostItem.module.css';

interface PostItemProps {
  onBookmark: () => void;
}

const PostItem: React.FC<PostItemProps> = ({ onBookmark }) => {
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
            ellen litman
          </span>
        </div>
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1">
          <Link href="/tag/Telegram-Chronicles-Donbas-and-its-War">
            <a>
              Telegram Chronicles: Donbas and its War (a.k.a. “the last 8
              years”)
            </a>
          </Link>
        </h3>
        <p className="hidden sm:block text-gray-600 text-sm md:text-base">
          In the last couple of weeks, Russia withdrew its forces from around
          Kyiv and announced that its true goal is to “liberate” Donbas, which…
        </p>
        <div className="mt-5 flex items-center">
          <span className=" text-gray-600 text-xs md:text-sm">
            Apr18 &#xB7;
          </span>
          <span className="mx-2 text-gray-600 text-xs md:text-sm">
            8min read &#xB7;
          </span>
          <Link href="/">
            <a className=" text-gray-600 text-xs md:text-sm py-1 px-2 bg-gray-200 rounded-xl">
              Programming
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
