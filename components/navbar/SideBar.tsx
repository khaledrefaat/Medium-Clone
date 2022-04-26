import Image from 'next/image';
import Link from 'next/link';
import { ReactEventHandler, useEffect, useState } from 'react';
import MobileUserMenu from './MobileUserMenu';
import SideBarItem from './SideBarItem';
import UserMenu from './UserMenu';

const SideBar: React.FC<{ hideMenuRef: any }> = ({ hideMenuRef }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const hideMenu = () => setIsMenuVisible(false);

  useEffect(() => {
    hideMenuRef.current = hideMenu;
  }, []);

  return (
    <>
      <div
        className="fixed left-0 right-0 bottom-0 bg-white z-50  lg:px-4 lg:relative lg:block lg:top-0"
        onClick={hideMenu}
      >
        <div className="flex  justify-around items-center sticky pt-3 shadow-lg shadow-black lg:shadow-none lg:h-screen lg:top-0 lg:flex-col ">
          <div className="hidden lg:block lg:mt-8">
            <Link href="/">
              <a>
                <Image
                  src="/medium.png"
                  height="45"
                  width="45"
                  layout="fixed"
                />
              </a>
            </Link>
          </div>
          <nav>
            <ul className="flex w-screen justify-around lg:w-max items-center lg:flex-col">
              <SideBarItem
                href="/"
                src="/icons/home-outline.svg"
                className="mr-5 sm:mr-10 lg:mr-0"
              />
              <SideBarItem
                href="/notification"
                src="/icons/notification-outline.svg"
                className="lg:mx-0 lg:my-8 mr-5 sm:mr-10 lg:mr-0"
              />
              <SideBarItem
                href="/bookmark"
                src="/icons/bookmark-outline.svg"
                className="lg:mx-0 lg:my-8 mr-5 sm:mr-10 lg:mr-0"
              />
              <li className="hidden lg:block border-b-2 border-gray-300 w-full my-10 " />
              <SideBarItem
                href="/post/new"
                src="/icons/pencil-outline.svg"
                className="hidden lg:block"
              />
              <li
                className="lg:hidden lg:mx-auto lg:mb-8 cursor-pointer relative"
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
              </li>
            </ul>
          </nav>
          <div
            className="hidden lg:block lg:mx-auto lg:mb-8 cursor-pointer relative"
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
      {isMenuVisible && <MobileUserMenu />}
    </>
  );
};

export default SideBar;
