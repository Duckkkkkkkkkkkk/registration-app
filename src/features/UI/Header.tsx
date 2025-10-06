import React from 'react';

import logo from '../../assets/logo.png';
import allProductsIcon from '../../assets/all_products_icon.svg';
import notificationIcon from '../../assets/notification_icon.svg';

const Header: React.FC = () => {
  return (
    <header className="w-full h-[72px] bg-white shadow-[0px_4px_16px_0px_#00000014,0px_0px_16px_0px_#00000014] fixed top-0 left-0 z-10 px-[144px] flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-10" />
      <div className="flex gap-4">
        <img src={allProductsIcon} alt="Все продукты" className="w-8 h-8 cursor-pointer hover:opacity-70" />
        <img src={notificationIcon} alt="Уведомления" className="w-8 h-8 cursor-pointer hover:opacity-70" />
      </div>
    </header>
  );
};

export default Header;