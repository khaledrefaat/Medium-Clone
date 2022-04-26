import Image from 'next/image';
import React, { ReactChild, ReactNode } from 'react';

const MenuItem: React.FC<{
  className?: string;
  children: ReactChild | ReactChild[];
}> = ({ className, children }) => (
  <div className={`cursor-pointer mb-7 ${className && className}`}>
    {children}
  </div>
);

const Divider = () => <div className="border-b border-gray-300 w-full my-5 " />;

const MobileUserMenu = () => {
  return (
    <div className="top-0 bottom-0 fixed overflow-y-scroll right-0 z-20  w-screen bg-white lg:hidden pt-5 pb-14 pl-10 sm:px-10 md:px-20 flex flex-col justify-start">
      <div className="flex justify-between mb-10">
        <Image src="/medium.png" height="50" width="50" />
        <button className="bg-black text-white font-medium rounded-3xl px-4 py-2 shadow-sm">
          Get unlimited access
        </button>
      </div>
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
      <Divider />
      <MenuItem className="flex items-center">
        <Image src="/icons/notification-outline.svg" height="20" width="20" />
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
      <Divider />
      <MenuItem>Settings</MenuItem>
      <MenuItem>Manage publications</MenuItem>
      <MenuItem>Refine recommendations</MenuItem>
      <MenuItem>Sign out</MenuItem>
      <Divider />
      <MenuItem>Become a member</MenuItem>
      <MenuItem>Gift a membership</MenuItem>
      <MenuItem>Medium Partner Program</MenuItem>
      <Divider />
      <MenuItem>Help</MenuItem>
      <MenuItem>Privacy</MenuItem>
      <MenuItem>Terms</MenuItem>
    </div>
  );
};

export default MobileUserMenu;
