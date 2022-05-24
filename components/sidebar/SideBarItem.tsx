import Image from 'next/image';
import Link from 'next/link';

interface SideBarItemProps {
  href?: string;
  src: string;
  className?: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ href, src, className }) => {
  return href ? (
    <li className={`${className}`}>
      <Link href={href}>
        <a>
          <Image src={src} height="25" width="25" />
        </a>
      </Link>
    </li>
  ) : (
    <li className={`${className} cursor-pointer`}>
      <Image src={src} height="25" width="25" />
    </li>
  );
};

export default SideBarItem;
