import { useSession } from 'next-auth/react';
import { Ref } from 'react';
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';

interface HeaderProps {
  hideMenuRef: { current: Ref<() => void> };
}

const Header: React.FC<HeaderProps> = ({ hideMenuRef }) => {
  const { status } = useSession();

  if (status === 'loading') {
    return null;
  }

  if (status === 'authenticated') {
    return <SideBar hideMenuRef={hideMenuRef} />;
  }
  return <NavBar />;
};

export default Header;
