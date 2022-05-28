import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useEffect } from 'react';
import { useState } from 'react';
import { imageLoader } from '../../lib/util';
import Divider from '../Ui/Divider';
import UserImage from '../Ui/UserImage';
import MoreItem from '../Ui/MoreItem';
import AddBookmark from '../icons/add-bookmark.svg';
import More from '../icons/more.svg';

interface AuthorizedPostItemProps {
  isLast?: boolean;
  showMore: () => void;
  showMoreMenu: boolean;
  authorImage: string;
  author: string;
  mainImage: string;
  category: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  readingTime: number;
  id: string;
}

const AuthorizedPostItem: React.FC<AuthorizedPostItemProps> = props => {
  const [showMore, setShowMore] = useState(false);

  const hideMoreMenu = () => setShowMore(false);

  const toggleMoreMenu = (e: MouseEvent) => {
    e.stopPropagation();
    setShowMore(showMore => !showMore);
    // to change the state to true so the useEffect can work
    props.showMore();
  };

  useEffect(() => {
    if (props.showMoreMenu === false) {
      hideMoreMenu();
    }
  }, [props.showMoreMenu]);

  return (
    <>
      <li className="my-10 flex items-center mx-1 lg:mx-0">
        <div>
          <div className="flex items-center mb-3">
            <UserImage src={props.authorImage} loader />
            <p className="text-xs sm:text-base ml-3">{props.author}</p>
            <div className="text-xs text-gray-700 ml-0.5">in</div>
            <Link href="/tag/coding">
              <a className="text-xs sm:text-base ml-0.5 capitalize">
                {props.category}
              </a>
            </Link>
            <div className=" text-gray-600 text-xs md:text-sm ml-1 capitalize">
              &#xB7; {props.date}
            </div>
          </div>
          <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
            <Link href={`/post/${props.id}`}>
              <a>{props.title}</a>
            </Link>
          </h3>
          <p className="hidden sm:block text-gray-600 text-sm">
            {props.description.substring(0, 165) + '...'}
          </p>
          <div className="mt-5 flex items-center">
            <Link href="/">
              <a className=" text-gray-600 text-xs md:text-sm py-1 px-2 bg-gray-200 rounded-xl capitalize">
                {props.tag}
              </a>
            </Link>
            <div className="ml-3 text-gray-600 text-xs">
              {props.readingTime} min read
            </div>
            <div className="ml-auto mr-0 sm:mr-5 flex mt-3">
              <div className="cursor-pointer">
                <AddBookmark className="w-5 h-5 fill-slate-500 hover:fill-slate-800" />
              </div>
              <div
                className="cursor-pointer ml-2 relative z-20"
                onClick={toggleMoreMenu}
              >
                <More className="w-5 h-5 fill-slate-500 hover:fill-slate-800" />

                {showMore && <MoreItem isLast={props.isLast} />}
              </div>
            </div>
          </div>
        </div>
        <div className={`ml-3 `}>
          <Image
            loader={imageLoader}
            src={props.mainImage}
            height="130"
            width="130"
            layout="fixed"
          />
        </div>
      </li>
      <Divider className="my-3" />
    </>
  );
};

export default AuthorizedPostItem;
