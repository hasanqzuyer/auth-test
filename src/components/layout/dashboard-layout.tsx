import React from 'react';
import Sidebar from './main-sidebar';
import Header from './main-header';
import { Outlet } from 'react-router-dom';
import Logout from '../dashboard/prompt-logout-model';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <div className="hidden lg:block fixed left-0 top-0 h-screen w-60">
        <Sidebar />
      </div>

      <div className="flex flex-col w-full lg:ml-60">
        <div className="fixed fle-1 top-0 left-0 lg:left-60 w-full lg:w-[calc(100%-15rem)] z-50">
          <Header />
        </div>

        <main className="bg-[#F1F3F6] flex-1 mt-[88px] overflow-hidden max-h[calc(100%-88px)]">
          <Outlet />
        </main>
      </div>

      <Logout />
    </div>
  );
};

export default DashboardLayout;