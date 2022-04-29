import Image from 'next/image';

interface UserItemProps {
  user: string;
  description: string;
  imageSrc: string;
}

const UserItem: React.FC<UserItemProps> = ({ user, description, imageSrc }) => {
  const trimmedDescription = description.substring(0, 58) + '...';

  return (
    <li className="flex items-center mt-3 max-w-xs">
      <div className="mr-3">
        <Image src={imageSrc} height="75" width="75" className="rounded-full" />
      </div>
      <div>
        <h2 className="font-bold">{user}</h2>
        <p className=" max-w-xs text-sm text-gray-600">{trimmedDescription}</p>
      </div>
      <div>
        <button className="py-1 px-3 border rounded-3xl hover:border-black transition-all">
          Follow
        </button>
      </div>
    </li>
  );
};

export default UserItem;
