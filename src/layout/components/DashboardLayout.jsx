// DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Sidebar from '../components/sideBar/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

import JoinMedsLoader from 'pages/common/components/JoinMedsLoader';
import { getIsLoggingOut } from 'pages/common/selectors';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isLoggingOut = useSelector(getIsLoggingOut);

  // 🔑 GLOBAL LOGOUT LOADER
  if (isLoggingOut) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <JoinMedsLoader text="Logging out..." />
      </div>
    );
  }

  return (
    <div className="relative flex h-screen bg-[#F4F9FB] text-[#003461] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        toggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
