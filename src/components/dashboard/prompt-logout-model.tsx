import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useApp } from '@/hooks/useApp';
import IMAGES from '@/utils/images';

const Logout: React.FC = () => {
    const { isLogoutOpen, toggleLogout } = useApp()

    return (
        <Dialog open={isLogoutOpen} onOpenChange={toggleLogout}>
            <DialogContent
                className="w-full max-w-[310px] lg:max-w-[380px] flex flex-col justify-between overflow-y-auto !rounded-2xl max-h-[80vh]"
                size={'xs'}
                position={'default'}
            >
                <img src={IMAGES.logout} alt="Success" className="object-cover w-full h-auto rounded-t-2xl max-w-[60%] mx-auto" />
                <div className="p-6 space-y-6 -mt-12">
                    <p className="text-[24px] lg:text-[38px] font-extrabold text-[#19213D] leading-7 lg:leading-10 text-center">
                        Are you sure you want to Logout?
                    </p>
                    <div className='space-y-4'>
                        <Button
                            className="w-full cursor-pointer hover:bg-[#247BFF]/[80] bg-[#247BFF] text-white text-base rounded-full py-5.5 shadow-lg shadow-[#2F51FF]/[25%"
                            onClick={toggleLogout}
                        >
                            No, take me back
                        </Button>
                        <Button
                            className="w-full cursor-pointer hover:bg-[#E0ECFF]/[80] bg-[#E0ECFF] text-[#344054] text-base rounded-full py-5.5"
                            onClick={() => { window.location.href = '/auth/login' }}
                        >
                            Yes, take me out
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default Logout;