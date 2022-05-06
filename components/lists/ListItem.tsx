import Image from 'next/image';
import Button from '../Ui/Button';

const ImageComponent: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`${className ? className : ''} absolute top-0 h-full`}>
    <div className="w-36 h-full">
      <div className="bg-gray-900 h-full w-full flex items-center">
        <div className="h-full w-full bg-gray-500 rounded-full" />
      </div>
    </div>
  </div>
);

interface ListItemProps {
  title: string;
  isLocked?: boolean;
  imagesSrc?: [string, string, string];
}

const ListItem: React.FC<ListItemProps> = ({ title, isLocked, imagesSrc }) => {
  return (
    <div className="flex justify-between bg-gray-50 border px-3 py-5 relative overflow-hidden rounded-md mb-10">
      <div>
        <h2 className="text-xl font-bold mb-12">{title}</h2>
        <div>
          <Button className="border text-black border-gray-600 mr-5 text-sm hover:border-black">
            View list
          </Button>
          <Image src="/icons/lock.svg" height="12" width="12" />
        </div>
      </div>
      <div>
        <ImageComponent className="border-r-2 border-r-white z-20 right-32" />
        <ImageComponent className="border-r-2 border-r-white z-10 right-16" />
        <ImageComponent className="right-0" />
      </div>
    </div>
  );
};

export default ListItem;
