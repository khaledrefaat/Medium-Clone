import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import UserInfoBox from './UserInfoBox';

interface UserProps {
  src: string;
  href: string;
  className?: string;
  userName: string;
  description: string;
  followers: string;
  userLink?: string;
  isFirst?: boolean;
}

const UserItem: React.FC<UserProps> = ({
  src,
  href,
  className,
  userName,
  description,
  followers,
  userLink,
  isFirst,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const showUserInfo = () => setIsHovered(true);

  const hideUserInfo = () => setIsHovered(false);

  return (
    <li
      className={`${className ? className : ''} relative`}
      onMouseLeave={hideUserInfo}
      onMouseEnter={showUserInfo}
    >
      <div className="pb-16">
        <Link href={href}>
          <a>
            <Image src={src} height="50" width="50" className="rounded-full" />
          </a>
        </Link>

        {isHovered && (
          <UserInfoBox
            imageSrc={src}
            userName={userName}
            description={description}
            followers={followers}
            href={userLink}
            isFirst={isFirst}
          />
        )}
      </div>
    </li>
  );
};

export default UserItem;
