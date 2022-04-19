import Link from 'next/link';
import React from 'react';

const TagItem: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => {
  return (
    <li className="py-1 px-2 border border-gray-300 my-2 mx-1 rounded-sm capitalize">
      <Link href={link}>
        <a className=" text-gray-500 text-sm">{title}</a>
      </Link>
    </li>
  );
};

export default TagItem;
