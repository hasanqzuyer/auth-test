import React from 'react';
import { Icon } from '@iconify/react';
import { APP_ROUTES } from '@/utils/constant';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '@/hooks/useApp';
import IMAGES from '@/utils/images';

const Sidebar: React.FC = () => {
    const location = useLocation();
    const { toggleLogout } = useApp();

    const Menu = [
        { icon: 'bx:home', text: 'Dashboard', route: APP_ROUTES.DASHBOARD },
    ];

    return (
        <div className="w-60 h-screen bg-[#F9FAFC] border-r border-[#EBECF2] flex flex-col p-4 gap-y-6 z-50">
            <div className="flex items-center justify-center w-full">
                <img src={IMAGES.logo} alt="" className='w-28' />
            </div>

            <nav className="mt-2 flex flex-col space-y-2">
                {Menu.map((item, index) => (
                    <NavItem key={index} icon={item.icon} text={item.text} route={item.route} active={location.pathname === item.route} />
                ))}
            </nav>

            <div className="mt-auto p-2 space-y-2.5 bg-[#F1F7FF] rounded-md">
                <button onClick={toggleLogout} className='flex items-center px-3 py-2 rounded-full w-full gap-x-3 hover:bg-[#C8DEFF]'>
                    <img src={IMAGES.logout_icon} alt="" />
                    <span className='text-[13px] font-semibold'>Logout</span>
                </button>
            </div>
        </div>
    );
};

const NavItem: React.FC<{ icon: string; text: string; route: string; active?: boolean, styles?: string }> = ({ icon, text, route, active, styles }) => (
    <Link to={route} className={`
    flex items-center rounded-full p-2 gap-x-2 cursor-pointer hover:bg-[#C8DEFF] transition-all duration-300 
    ${active ? 'bg-[#C8DEFF]' : 'px-3'} 
    ${styles}
    `}>
        <div className={`${active ? 'text-white border border-white p-2 rounded-full shadow-lg shadow-[#0D25FF]/[30%] relative' : 'text-[#247BFF] mr-1'} overflow-hidden flex items-center justify-center`}>
            <Icon icon={icon} className="text-2xl relative z-10" />
            {active && (
                <img className="absolute right-0 top-1 z-0 blur-xs" src={IMAGES.active_bg} alt="" />
            )}
        </div>
        <span className='text-[13px] font-semibold'>{text}</span>
    </Link>
);

export default Sidebar;