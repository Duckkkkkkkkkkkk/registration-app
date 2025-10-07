import React, {useState} from 'react';

import logo from '../../assets/logo.svg';
import allProductsIcon from '../../assets/all_products_icon.svg';
import notificationIcon from '../../assets/notification_icon.svg';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="
      w-full bg-white fixed top-0 left-0 z-10
      flex items-center justify-center
      h-[52px] px-5 shadow-none
      transition-all duration-300
      md:justify-between md:h-[72px] md:px-36
      md:shadow-[0px_4px_16px_0px_#00000014,0px_0px_16px_0px_#00000014]
    ">
      <img
        src={logo}
        alt="Логотип KWOL"
        className="h-8 cursor-pointer md:h-10"
        onClick={() => setShowMenu((prev) => !prev)}
      />
      <div className={`
        flex gap-4
        absolute top-full left-1/2 -translate-x-1/2
        bg-white rounded-b-2xl px-4 py-3
        opacity-0 pointer-events-none transition-all duration-300
        ${showMenu ? "opacity-100 pointer-events-auto" : ""}
        md:relative md:top-0 md:left-0 md:translate-x-0 
        md:opacity-100 md:pointer-events-auto md:flex
      `}>
        <img
          src={notificationIcon}
          alt="Уведомления" 
          className="w-6 h-6 cursor-pointer hover:opacity-70 md:w-8 md:h-8"
        />
        <img
          src={allProductsIcon}
          alt="Все продукты"
          className="w-6 h-6 cursor-pointer hover:opacity-70  md:w-8 md:h-8"
        />
      </div>
    </header>
  );
};

export default Header;