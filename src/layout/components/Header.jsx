import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { STORAGE_KEYS } from 'pages/common/constants';
import { getDataFromStorage } from 'utils/encryption';

function Header({ toggleSidebar }) {
  const navigate = useNavigate();
  const { orgName = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      localStorage.clear();
      navigate('/');
    }, 2000); // 2-second delay
  };

  return (
    <>
      <header className="flex items-center justify-between bg-white p-4 shadow-md">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-[#003461] text-2xl"
        >
          ☰
        </button>

        <h2 className="text-xl font-semibold text-center">
          <span className="font-bold text-[#2E97F0]">Join</span>
          <span className="font-bold text-[#00B5D8]">Meds Portal</span>
        </h2>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-700">Welcome, {orgName}</span>
          <button onClick={handleLogout} className="text-[#00A4E1] hover:text-red-500 cursor-pointer">
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>
      </header>

      {loggingOut && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90">
          {/* Spinner with JoinMeds colors */}
          <div
            className="h-16 w-16 border-4 border-t-transparent rounded-full animate-spin mb-4"
            style={{
              borderTopColor: '#00A4E1',   // Cyan
              borderRightColor: '#1E90FF', // Blue
              borderBottomColor: '#20C997', // Teal
              borderLeftColor: '#00A4E1'
            }}
          />
          {/* Gradient Text */}
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            JoinMeds Portal - Logging out...
          </h1>
        </div>
      )}
    </>
  );
}

export default Header;
