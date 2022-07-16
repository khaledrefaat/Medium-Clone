import Image from 'next/image';
import React from 'react';

interface TrendingPostInterface {
  index: number;
  imageSrc: string;
  authorName: string;
  postTitle: string;
  date: string;
}

const TrendingPost: React.FC<TrendingPostInterface> = ({
  index,
  imageSrc,
  authorName,
  postTitle,
  date,
}) => {
  return (
    <li className="flex flex-wrap">
      <div className="mr-5">
        <h3 className="text-gray-200 text-3xl sm:text-2xl font-bold">
          0{index}
        </h3>
      </div>
      <div>
        <div className="flex items-center">
          <Image
            src={imageSrc}
            height="25"
            width="25"
            className="rounded-full"
            alt={authorName}
          />
          <p className="ml-2">{authorName}</p>
        </div>
        <div>
          <h3 className="text-lg sm:text-base lg:text-lg font-bold my-1">
            {postTitle}
          </h3>
        </div>
        <div className="text-sm text-gray-500">
          <span>{date}</span> <span>&#183;</span> <span>2min read</span>
        </div>
      </div>
    </li>
  );
};

export default TrendingPost;
