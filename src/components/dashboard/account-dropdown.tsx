import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import React from 'react';
import { Icon } from '@iconify/react';
import { useApp } from '@/hooks/useApp';
import IMAGES from '@/utils/images';
import { useAuth } from '@/hooks/useAuth';

const AccountDropdown: React.FC = () => {
  const { toggleLogout } = useApp();
  const { user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <div className="flex items-center gap-x-1">
          <img
            src={IMAGES.avatar1}
            alt="Avatar"
            className="w-12 h-12 object-cover rounded-full p-0.5 cursor-pointer"
          />
          <div className="flex items-center gap-x-2">
            <div className="text-sm text-[#495057] hidden xl:block">
              <p>Test User</p>
              <p className="truncate max-w-[128px] overflow-hidden text-ellipsis">
                {user?.email}
              </p>
            </div>
            <Icon icon="bi:chevron-down" className="text-[#212529] text-xs" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 space-y-2 p-1 py-2">
        <DropdownMenuItem onClick={toggleLogout} className='text-[#344054] text-sm leading-[20px] font-medium cursor-pointer p-2'>
          <Icon icon="lucide:log-out" className="mr-1 text-xl" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountDropdown;