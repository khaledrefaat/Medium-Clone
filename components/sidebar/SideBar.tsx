import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { MouseEvent, Ref, useEffect, useState } from 'react';
import Divider from '../Ui/Divider';
import UserImage from '../Ui/UserImage';
import MobileUserMenu from './MobileUserMenu';
import SideBarItem from './SideBarItem';
import UserMenu from './UserMenu';

const SideBar: React.FC<{ hideMenuRef: { current: Ref<() => void> } }> = ({
  hideMenuRef,
}) => {
  const { data: session, status } = useSession();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  useEffect(() => {
    hideMenuRef.current = hideMenu;
  }, [hideMenuRef]);

  if (status === 'loading') {
    return null;
  }

  const hideMenu = () => setIsMenuVisible(false);

  const toggleMenu = (e: MouseEvent) => {
    setIsMenuVisible(isMenuVisible => !isMenuVisible);
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed left-0 right-0 bottom-0 z-50 bg-white  lg:px-4 lg:relative lg:block lg:top-0 border-r border-gray-200"
        onClick={hideMenu}
      >
        <div className="flex  justify-around items-center sticky pt-3 shadow-lg shadow-black lg:shadow-none lg:h-screen lg:top-0 lg:flex-col ">
          <div className="hidden lg:block">
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
                className=" lg:mb-5"
              />
              <SideBarItem
                src="/icons/notification.svg"
                className="hidden lg:block lg:mx-0 lg:my-5 "
              />
              <SideBarItem
                href="/search"
                src="/icons/search.svg"
                className="lg:hidden"
              />
              <SideBarItem
                src="/icons/stories.svg"
                className="hidden lg:block lg:mx-0 lg:my-5 "
              />
              <SideBarItem
                href="/me/lists"
                src="/icons/bookmark-outline.svg"
                className="lg:mx-0 lg:mt-5 "
              />
              <Divider className="hidden lg:block my-8 border-b-2" />
              <SideBarItem
                src="/icons/pencil-outline.svg"
                className="hidden lg:block"
              />
              <li
                className="lg:hidden lg:mx-auto cursor-pointer relative"
                onClick={toggleMenu}
              >
                <UserImage
                  src={session?.user?.image as string}
                  height={40}
                  width={40}
                />
              </li>
            </ul>
          </nav>
          <div
            className="hidden lg:block lg:mx-auto cursor-pointer relative"
            onClick={toggleMenu}
          >
            <UserImage
              src={session?.user?.image as string}
              height={40}
              width={40}
            />
            {isMenuVisible && <UserMenu />}
          </div>
        </div>
      </div>
      <MobileUserMenu isMenuVisible={isMenuVisible} />
    </>
  );
};

export default SideBar;
