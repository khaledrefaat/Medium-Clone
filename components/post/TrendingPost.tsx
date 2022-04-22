import Image from 'next/image';
import React from 'react';

const TrendingPost = () => {
  return (
    <li className="flex flex-wrap">
      <div className="mr-5">
        <h3 className="text-gray-200 text-3xl sm:text-2xl font-bold">01</h3>
      </div>
      <div>
        <div className="flex items-center">
          <Image
            src="/jake.jpg"
            height="25"
            width="25"
            className="rounded-full"
          />
          <p className="ml-2">Andre Cronje</p>
        </div>
        <div>
          <h3 className="text-lg sm:text-base lg:text-lg font-bold my-1">
            The rise and fall of crypto culture
          </h3>
        </div>
        <div className="text-sm text-gray-500">
          <span>Apr 18</span> <span>&#183;</span> <span>2min read</span>
        </div>
      </div>
    </li>
  );
};

export default TrendingPost;
