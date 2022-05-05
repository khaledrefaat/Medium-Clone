import { Ref } from 'react';
import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';

interface HeaderProps {
  hideMenuRef: { current: Ref<() => void> };
}

const Header: React.FC<HeaderProps> = ({ hideMenuRef }) => {
  // render based on is user logged in or not
  // return <NavBar />;
  return <SideBar hideMenuRef={hideMenuRef} />;
};

export default Header;
