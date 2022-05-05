import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, useEffect } from 'react';
import { useState } from 'react';
import MoreItem from './MoreItem';

interface AuthorizedPostItemProps {
  isLast?: boolean;
  showMore: () => void;
  showMoreMenu: boolean;
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
    <li className="my-10 flex items-center mx-1 lg:mx-0">
      <div>
        <div className="flex items-center mb-3">
          <Image
            src="/jake.jpg"
            height={25}
            width={25}
            className="rounded-full"
          />
          <p className="text-xs sm:text-base ml-3">ellen litman</p>
          <div className="text-xs text-gray-700 ml-0.5">in</div>
          <Link href="/tag/coding">
            <a className="text-xs sm:text-base ml-0.5">Coding</a>
          </Link>
          <div className=" text-gray-600 text-xs md:text-sm ml-1">
            &#xB7; Apr18
          </div>
        </div>
        <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">
          <Link href="/tag/Telegram-Chronicles-Donbas-and-its-War">
            <a>
              Telegram Chronicles: Donbas and its War (a.k.a. “the last 8
              years”)
            </a>
          </Link>
        </h3>
        <p className="hidden sm:block text-gray-600 text-sm">
          In the last couple of weeks, Russia withdrew its forces from around
          Kyiv and announced that its true goal is to “liberate” Donbas, which…
        </p>
        <div className="mt-5 flex items-center">
          <Link href="/">
            <a className=" text-gray-600 text-xs md:text-sm py-1 px-2 bg-gray-200 rounded-xl">
              Programming
            </a>
          </Link>
          <div className="ml-3 text-gray-600 text-xs">7 min read</div>
          <div className="ml-auto mr-0 sm:mr-5 flex mt-3">
            <div className="cursor-pointer">
              <Image
                src="/icons/add-bookmark.svg"
                height={20}
                width={20}
                layout="fixed"
              />
            </div>
            <div
              className="cursor-pointer ml-2 relative z-20"
              onClick={toggleMoreMenu}
            >
              <Image
                src="/icons/more.svg"
                height={17}
                width={17}
                layout="fixed"
              />
              {showMore && <MoreItem isLast={props.isLast} />}
            </div>
          </div>
        </div>
      </div>
      <div className={`ml-3 `}>
        <Image src="/post-1.jpg" height="130" width="130" layout="fixed" />
      </div>
    </li>
  );
};

export default AuthorizedPostItem;
