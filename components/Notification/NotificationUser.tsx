import Image from 'next/image';

interface NotificationUserProps {
  imageSrc: string;
  userName: string;
  date: string;
  title: string;
}

const NotificationUser: React.FC<NotificationUserProps> = ({
  imageSrc,
  userName,
  date,
  title,
}) => {
  return (
    <div className="flex items-center mb-8">
      <div className="mr-3">
        <Image src={imageSrc} height="30" width="30" className="rounded-full" />
      </div>
      <div className="text-left">
        <div className="text-sm font-medium">
          {userName}
          <span className="ml-1 text-xs text-gray-500">{title}</span>
        </div>
        <div className="text-xs text-gray-500 font-medium capitalize">
          {date}
        </div>
      </div>
    </div>
  );
};

export default NotificationUser;
