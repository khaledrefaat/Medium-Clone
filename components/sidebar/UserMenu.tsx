import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const UserMenuItem: React.FC<{ content: string; signOut?: () => void }> = ({
  content,
  signOut,
}) => (
  <li className="mb-5" onClick={signOut}>
    {content}
  </li>
);

const UserMenu = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') return null;

  return (
    <div
      className="absolute hidden lg:block bottom-16 left-0 bg-white p-5 pr-16 w-max shadow-lg rounded-md"
      onClick={e => e.stopPropagation()}
    >
      <ul>
        <UserMenuItem content="Medium Partner Program" />
        <UserMenuItem content="Gift a membership" />
        <UserMenuItem content="Become a member" />
        <div>
          &nbsp;
          <span className="border-b-2 border-slate-200 w-full absolute left-0 right-0" />
        </div>
        <UserMenuItem content="Sign out" signOut={signOut} />
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
              loader={() => session?.user?.image as string}
              src={session?.user?.image as string}
              height="45"
              width="45"
              className="rounded-full"
            />
          </div>
          <div>
            <h4 className="font-medium">{session?.user?.name}</h4>
            <p className="text-xs text-gray-700">
              @{session?.user?.email?.split('@')[0]}
            </p>
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
