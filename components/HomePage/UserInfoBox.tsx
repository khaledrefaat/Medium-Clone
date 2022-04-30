import Image from 'next/image';
import Link from 'next/link';

interface UserInfoBoxProps {
  userName: string;
  imageSrc: string;
  description: string;
  followers: string;
  href?: string;
  isFirst?: boolean;
}

const UserInfoBox: React.FC<UserInfoBoxProps> = ({
  userName,
  imageSrc,
  description,
  followers,
  href,
  isFirst,
}) => {
  return (
    <div
      className={`absolute top-20 first-of-type: left-1/2 bg-white rounded-md px-3 py-2 w-max drop-shadow-lg hidden md:block ${
        isFirst ? '-translate-x-16' : '-translate-x-1/2'
      }`}
    >
      <div>
        <div
          className={`absolute -top-6  left-1/2 rotate-180 drop-shadow-sm ${
            isFirst ? '-translate-x-24' : '-translate-x-1/2'
          }`}
        >
          <Image src="/icons/arrow-down.svg" height="23" width="23" />
        </div>

        <div className="flex items-center my-3">
          <Image
            src={imageSrc}
            height="40"
            width="40"
            className="rounded-full"
          />
          <h2 className="ml-3 text-xl font-bold capitalize">{userName}</h2>
        </div>

        <div>
          <p className="max-w-xs text-sm">{description}</p>
          {href && (
            <Link href="/">
              <a className=" underline text-sm">https://localhost:3000</a>
            </Link>
          )}
        </div>

        <div className="border-b border-gray-200 w-full my-3" />

        <div className="flex justify-between">
          <span className="text-sm text-gray-500">{followers} Followers</span>
          <button className="text-sm leading-4 py-0.5 text-center px-2 flex items-center rounded-3xl border border-green-700 text-green-700">
            Following
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoBox;
