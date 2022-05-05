// import { createContext, ReactChild, useState } from "react";

// interface MenuContextInterface {
//     hideUserMenu: () => void;
//     hideMoreMenu: () => void;
//     toggleUserMenu: () => void;
//     toggleMoreMenu: () => void;
// }

// export const MenuContext = createContext<MenuContextInterface>({
//     hideUserMenu: () => {},
//     hideMoreMenu: () => {},
//     toggleUserMenu: () => {},
//     toggleMoreMenu: () => {}
// })

// export const MenuContextProvider: React.FC<{children: ReactChild}> = ({children}) => {
//     const [showMoreMenu, setShowMoreMenu] = useState();
//     const [showUserMenu, setShowUserMenu] = useState();

//     const hideUserMenu = () => setShowUserMenu

//     return <MenuContext.Provider value={}>
//         {children}
//     </MenuContext.Provider>
// }
