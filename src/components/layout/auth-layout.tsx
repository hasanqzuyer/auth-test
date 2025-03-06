import React from 'react';
import { Outlet } from 'react-router-dom';
import IMAGES from '@/utils/images';

const AuthLayout: React.FC = () => {

  return (
    <main className="w-full h-screen flex flex-col md:flex-row overflow-y-auto">
      <section className="md:w-1/2 p-[0.5%] order-2 md:order-none ">
        <div
          className="bg-cover h-[42rem] md:h-full"
          style={{ backgroundImage: `url(${IMAGES.login_bg})` }}
        >
          <div className='h-full bg-linear-to-b to-black bg-[auto_70%] bg-no-repeat bg-bottom flex flex-col justify-end gap-y-4 p-6 xl:p-12'>

          </div>
        </div>
      </section>
      <section className="w-full md:w-1/2">
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;