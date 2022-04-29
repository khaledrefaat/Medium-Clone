import NavBar from '../navbar/NavBar';
import SideBar from '../sidebar/SideBar';

interface HeaderProps {}

const Header: React.FC<{ hideMenuRef: any }> = ({ hideMenuRef }) => {
  // render based on is user logged in or not
  // return <NavBar />;
  return <SideBar hideMenuRef={hideMenuRef} />;
};

export default Header;
