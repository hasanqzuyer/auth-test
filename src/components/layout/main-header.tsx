import React from 'react';
import AccountDropdown from '../dashboard/account-dropdown';
import SidebarSheet from './sidebar-sheet';

const Header: React.FC = () => {

  return (
    <header className="bg-white p-5 flex flex-col lg:flex-row items-center justify-between gap-y-4 fixed w-full lg:w-[calc(100%-15rem)] top-0 left-0 lg:left-60 z-50">
      <section className='hidden lg:block'>
        <h2 className='text-[#111111] font-bold text-[28px]'>{'Dashboard'}</h2>
      </section>
      <section className='flex items-center justify-between w-full lg:w-fit'>
        <div className='block lg:hidden'>
          <SidebarSheet />
        </div>
        <div className='flex items-center gap-x-2.5'>
          <AccountDropdown />
        </div>
      </section>
    </header>
  );
};

export default Header;
