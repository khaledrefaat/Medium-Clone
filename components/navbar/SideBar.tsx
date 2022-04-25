import Image from 'next/image';
import Link from 'next/link';
import { ReactEventHandler, useEffect, useState } from 'react';
import SideBarItem from './SideBarItem';
import UserMenu from './UserMenu';

const SideBar: React.FC<{ hideMenuRef: any }> = ({ hideMenuRef }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const hideMenu = () => setIsMenuVisible(false);

  useEffect(() => {
    hideMenuRef.current = hideMenu;
  }, []);

  return (
    <div className="top-0 bottom-0 px-4 hidden lg:block" onClick={hideMenu}>
      <div className="flex flex-col justify-between items-center sticky z-20 h-screen top-0">
        <div className="mt-10">
          <Link href="/">
            <a>
              <Image src="/medium.png" height="45" width="45" layout="fixed" />
            </a>
          </Link>
        </div>
        <nav>
          <ul>
            <SideBarItem href="/" src="/icons/home-outline.svg" />
            <SideBarItem
              href="/notification"
              src="/icons/notification-outline.svg"
              className="my-8"
            />
            <SideBarItem
              href="/bookmark"
              src="/icons/bookmark-outline.svg"
              className="my-8"
            />
            <div className="border-b border-gray-300 my-10" />
            <SideBarItem href="/post/new" src="/icons/pencil-outline.svg" />
          </ul>
        </nav>
        <div
          className="mx-auto mb-10 cursor-pointer relative"
          onClick={e => {
            setIsMenuVisible(isMenuVisible => !isMenuVisible);
            e.stopPropagation();
          }}
        >
          <Image
            src="/jake.jpg"
            height="40"
            width="40"
            className="rounded-full"
          />
          {isMenuVisible && <UserMenu />}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
