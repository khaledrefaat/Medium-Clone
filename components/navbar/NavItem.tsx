import Link from 'next/link';
import { ReactChild } from 'react';

interface NavItemProps {
  children: ReactChild;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>
        <a className="hidden md:inline text-sm  capitalize font-medium">
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
