import Image from 'next/image';
import Divider from './Divider';

const MoreItem: React.FC<{ isLast?: boolean }> = ({ isLast }) => {
  return (
    <div
      className={`absolute -right-16  shadow-lg w-max py-3 px-5 bg-white rounded-md ${
        isLast ? 'bottom-8' : 'top-8'
      }`}
      onClick={e => e.stopPropagation()}
    >
      <div
        className={`absolute left-1/2 drop-shadow-sm -translate-x-1/2 ${
          isLast ? '-bottom-5' : '-top-5 rotate-180'
        }`}
      >
        <Image src="/icons/arrow-down.svg" height="20" width="20" />
      </div>
      <div className="flex items-center">
        <Image src="/icons/forbidden.svg" height="14" width="14" />
        <p className="ml-1 text-xs text-gray-500 font-medium">
          Show less like this
        </p>
      </div>
      <Divider className="my-2" />
      <div className=" text-xs text-gray-500 font-medium">Mute this author</div>
      <div className=" text-xs mt-2 text-gray-500 font-medium">Report</div>
    </div>
  );
};

export default MoreItem;
