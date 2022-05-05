import Image from 'next/image';
import React, { ReactChild } from 'react';
import Divider from '../Ui/Divider';
import SideBarItem from './SideBarItem';

const MenuItem: React.FC<{
  className?: string;
  children: ReactChild | ReactChild[];
}> = ({ className, children }) => (
  <div className={`cursor-pointer mb-7 ${className && className}`}>
    {children}
  </div>
);

const MobileUserMenu: React.FC<{ isMenuVisible: boolean }> = ({
  isMenuVisible,
}) => {
  return (
    <div
      className={`top-0 fixed  right-0 z-20 h-auto w-screen bg-white lg:hidden sm:px-10 md:px-20 flex flex-col justify-start ${
        isMenuVisible &&
        'bottom-0 pt-5 pb-14 px-3 sm:pr-0 sm:pl-10 overflow-y-scroll'
      }`}
    >
      <div
        className={`flex justify-between ${isMenuVisible ? 'mb-10' : 'p-2'}`}
      >
        <Image src="/medium.png" height="50" width="50" />
        <button className="text-white bg-black ml-auto text-sm font-normal px-3 py-1  sm:text-base sm:font-medium sm:px-4 sm:py-2 rounded-3xl shadow-sm">
          Get unlimited access
        </button>
        {!isMenuVisible && (
          <SideBarItem
            href="/notification"
            src="/icons/notification-outline.svg"
            className="list-none mr-3 sm:mr-0 ml-5 flex items-center "
          />
        )}
      </div>
      {isMenuVisible && (
        <div>
          <div className="flex">
            <div className="mr-3">
              <Image
                src="/jake.jpg"
                height="45"
                width="45"
                className="rounded-full"
              />
            </div>
            <div>
              <h4 className="font-medium mb-1">Jake Rene</h4>
              <p className="text-sm text-gray-600">@jakerene8</p>
            </div>
          </div>
          <Divider className="my-5 border-b" />
          <MenuItem className="flex items-center">
            <Image
              src="/icons/notification-outline.svg"
              height="20"
              width="20"
            />
            <span className="ml-3">Notifications</span>
          </MenuItem>
          <MenuItem className="flex items-center">
            <Image src="/icons/story.svg" height="20" width="20" />
            <span className="ml-3">Stories</span>
          </MenuItem>
          <MenuItem className="flex items-center">
            <Image src="/icons/bar.svg" height="20" width="20" />
            <span className="ml-3">Stats</span>
          </MenuItem>
          <Divider className="my-5 border-b" />
          <MenuItem>Settings</MenuItem>
          <MenuItem>Manage publications</MenuItem>
          <MenuItem>Refine recommendations</MenuItem>
          <MenuItem>Sign out</MenuItem>
          <Divider className="my-5 border-b" />
          <MenuItem>Become a member</MenuItem>
          <MenuItem>Gift a membership</MenuItem>
          <MenuItem>Medium Partner Program</MenuItem>
          <Divider className="my-5 border-b" />
          <MenuItem>Help</MenuItem>
          <MenuItem>Privacy</MenuItem>
          <MenuItem>Terms</MenuItem>
        </div>
      )}
    </div>
  );
};

export default MobileUserMenu;
