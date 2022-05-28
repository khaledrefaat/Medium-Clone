import Image from 'next/image';
import { imageLoader } from '../../lib/util';

interface UserImageProps {
  src: string;
  className?: string;
  height?: number;
  width?: number;
  loader?: boolean;
}

const UserImage: React.FC<UserImageProps> = ({
  src,
  height,
  width,
  loader,
  className,
}) => {
  return loader ? (
    <Image
      loader={imageLoader}
      src={src}
      height={height || 25}
      width={width || 25}
      className={`${className ? className : ''} rounded-full`}
      alt="user"
    />
  ) : (
    <Image
      unoptimized
      src={src}
      height={height || 25}
      width={width || 25}
      className={`${className ? className : ''} rounded-full`}
      alt="user"
    />
  );
};

export default UserImage;
