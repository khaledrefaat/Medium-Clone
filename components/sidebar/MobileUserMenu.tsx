import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import Divider from '../Ui/Divider';
import UserImage from '../Ui/UserImage';
import MobileMenuItem from './MobileMenuItem';
import SideBarItem from './SideBarItem';

const MobileUserMenu: React.FC<{ isMenuVisible: boolean }> = ({
  isMenuVisible,
}) => {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  return (
    <div
      className={`top-0 fixed  right-0 z-40 h-auto w-screen bg-white px-2 lg:hidden sm:px-10 md:px-20 flex flex-col justify-start ${
        isMenuVisible
          ? 'bottom-0 pt-5 pb-14 px-3 sm:pr-0 sm:pl-10 overflow-y-scroll'
          : 'shadow-sm'
      }`}
    >
      <div
        className={`flex justify-between items-center px-1 ${
          isMenuVisible ? 'mb-10' : 'p-2'
        }`}
      >
        <Link href="/">
          <a>
            <Image src="/medium.png" alt="Medium Logo" height="50" width="50" />
          </a>
        </Link>
        <button className="text-white bg-black ml-auto text-sm font-normal px-3 py-2  sm:text-base sm:font-medium sm:px-4 h-fit rounded-3xl shadow-sm">
          Get unlimited access
        </button>
        {!isMenuVisible && (
          <SideBarItem
            src="/icons/notification.svg"
            className="list-none mr-3 sm:mr-0 ml-5 flex items-center "
          />
        )}
      </div>
      {isMenuVisible && (
        <div className="pl-2 sm:pl-0">
          <div className="flex">
            <div className="mr-3">
              <UserImage
                src={session?.user?.image as string}
                height={45}
                width={45}
              />
            </div>
            <div>
              <h4 className="font-medium mb-1">{session?.user?.name}</h4>
              <p className="text-sm text-gray-600">@{session?.user?.email}</p>
            </div>
          </div>
          <Divider className="my-5 border-b" />
          <MobileMenuItem className="flex items-center">
            <Image
              src="/icons/notification.svg"
              alt="Notification Icon"
              height="20"
              width="20"
            />
            <span className="ml-3">Notifications</span>
          </MobileMenuItem>
          <MobileMenuItem className="flex items-center">
            <Image
              src="/icons/story.svg"
              alt="Story Icon"
              height="20"
              width="20"
            />
            <span className="ml-3">Stories</span>
          </MobileMenuItem>
          <MobileMenuItem className="flex items-center">
            <Image src="/icons/bar.svg" alt="Icon" height="20" width="20" />
            <span className="ml-3">Stats</span>
          </MobileMenuItem>
          <Divider className="my-5 border-b" />
          <MobileMenuItem>Settings</MobileMenuItem>
          <MobileMenuItem>Manage publications</MobileMenuItem>
          <MobileMenuItem>Refine recommendations</MobileMenuItem>
          <MobileMenuItem signOut={signOut}>Sign out</MobileMenuItem>
          <Divider className="my-5 border-b" />
          <MobileMenuItem>Become a member</MobileMenuItem>
          <MobileMenuItem>Gift a membership</MobileMenuItem>
          <MobileMenuItem>Medium Partner Program</MobileMenuItem>
          <Divider className="my-5 border-b" />
          <MobileMenuItem>Help</MobileMenuItem>
          <MobileMenuItem>Privacy</MobileMenuItem>
          <MobileMenuItem>Terms</MobileMenuItem>
        </div>
      )}
    </div>
  );
};

export default MobileUserMenu;
