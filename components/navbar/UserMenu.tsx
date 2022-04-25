import Image from 'next/image';

const UserMenuItem: React.FC<{ content: string }> = ({ content }) => (
  <li className="mb-5">{content}</li>
);
const UserMenu = () => {
  return (
    <div className="absolute bottom-16 z-30 left-0 bg-white p-5 pr-16 w-max shadow-lg rounded-md">
      <ul>
        <UserMenuItem content="Medium Partner Program" />
        <UserMenuItem content="Gift a membership" />
        <UserMenuItem content="Become a member" />
        <div>
          &nbsp;
          <span className="border-b-2 border-slate-200 w-full absolute left-0 right-0" />
        </div>
        <UserMenuItem content="Sign out" />
        <UserMenuItem content="Refine recommendations" />
        <UserMenuItem content="Mange publications" />
        <UserMenuItem content="Stats" />
        <UserMenuItem content="Settings" />
        <div>
          &nbsp;
          <span className="border-b-2 border-slate-200 w-full absolute left-0 right-0" />
        </div>
        <li className="flex justify-start">
          <div className="mr-3">
            <Image
              src="/jake.jpg"
              height="45"
              width="45"
              className="rounded-full"
            />
          </div>
          <div>
            <h4 className="font-medium">Jake Rene</h4>
            <p className="text-xs text-gray-700">@jakerene8</p>
          </div>
        </li>
      </ul>
      <div className="absolute -bottom-5">
        <Image src="/icons/arrow-down.svg" height="20" width="20" />
      </div>
    </div>
  );
};

export default UserMenu;
