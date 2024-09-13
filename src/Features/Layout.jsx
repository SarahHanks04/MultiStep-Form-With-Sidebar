import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';


const Layout = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-xl bg-white p-10 shadow-md rounded-md overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
