import * as React from "react";
import { useState } from "react";
import styles from './sidebar.module.scss'
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { DiProlog } from "react-icons/di";
import { FaSearchLocation } from "react-icons/fa"
import { FcClapperboard, FcCollapse, FcDebt, FcDocument, FcHome, FcLinux, FcPortraitMode, FcSettings, FcStatistics, FcUnlock } from "react-icons/fc";

type SidebarProps = {
  //
};

const Sidebar: React.FC<any> = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [subMenuOpen, setsubMenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", icon: <FcHome /> },
    { title: "Pages", icon: <FcDocument /> },
    { title: "Media", spacing: true, icon: <FcClapperboard /> },
    {
      title: "Projects",
      icon: <FcDebt />,
      submenu: true,
      submenuItems: [
        { title: "Submenu 1", subIcons: <FcLinux /> }, 
        { title: "Submenu 2", subIcons: <FcLinux /> }, 
        { title: "Submenu 3", subIcons: <FcLinux />}
      ],
    },
    { title: "Analytics", icon: <FcStatistics /> },
    { title: "Profile", spacing: true , icon: <FcPortraitMode /> },
    { title: "Setting", icon: <FcSettings /> },
    { title: "Logout", icon: <FcUnlock /> },
  ];

  return <>
    <div className={`${styles.content_sidebars} ${isOpen ? "w-72" : "w-20"}`}>
      <HiOutlinePaperAirplane 
        className={`
          ${styles.menu_navigation} 
          ${isOpen && "transform rotate-180"}
        `} 
        onClick={() => setIsOpen(!isOpen)} />

        <div className={`${styles.menu_logo}`}>
          <DiProlog className={`
            ${styles.logo_in} 
            ${isOpen && "transform rotate-360"}
          `} />
          <span className={`
            ${styles.text_name} 
            ${!isOpen && "transform scale-0"}
          `}>Arifudin</span>
        </div>

        <div className={`
          ${styles.search} 
          ${!isOpen ? "px-2.5" : "px-4"}
        `}>
          <FaSearchLocation className={`
            ${styles.search_icon}  
            ${isOpen && "mr-2"}
          `} />
          <input 
            type="search" 
            placeholder="Cari" 
            className={`
            ${styles.input_search} 
            ${!isOpen && "hidden"}`
          } />
        </div>

        <ul className={`${styles.menu}`}>
          {Menus.map((menu, index) => (
            <>
              <li key={index} 
              className={`
                ${styles.title_menu} 
                ${"hover:bg-light-white"} 
                ${menu.spacing ? "mt-9" : "mt-2"}
              `}>
                <span className={styles.icon_title}>
                  {menu.icon}
                </span>
                <span className={`
                  ${styles.titles} 
                  ${!isOpen && "hidden"}
                `}>
                  {menu.title}
                </span>
                {menu.submenu && isOpen && (
                  <FcCollapse className={`
                    ${subMenuOpen && "transform rotate-180"}
                  `} 
                  onClick={() => 
                    setsubMenuOpen(!subMenuOpen)
                  } />
                )}
              </li>

              {menu.submenu && isOpen && subMenuOpen && (
                <ul>
                  {menu.submenuItems.map((subMenuItem, index) => (
                    <li key={index} 
                      className={`
                        ${styles.title_submenu} 
                        ${"hover:bg-light-white"}
                    `}>
                      <span className={`
                        ${styles.icon_title_submenu}
                      `}>
                        {subMenuItem.subIcons}
                      </span>
                      <span className={`
                        ${styles.title_submenu}
                      `}>
                        {subMenuItem.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
    </div>
  </>;
};

export default Sidebar;
