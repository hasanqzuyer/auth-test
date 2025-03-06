import React from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from './main-sidebar';
import { Icon } from '@iconify/react';

const SidebarSheet: React.FC = () => {
    return (
        <Sheet>
            <SheetTrigger className="h-11 w-11 flex items-center justify-center border border-[#F5F5F7] rounded-full cursor-pointer">
                <Icon icon={'solar:hamburger-menu-linear'} className='text-2xl text-[#8E92BC]'/>
            </SheetTrigger>
            <SheetContent className=" w-fit p-0" side={'left'}>
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

export default SidebarSheet;