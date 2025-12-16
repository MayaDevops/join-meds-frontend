import React from 'react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { STORAGE_KEYS } from 'pages/common/constants';
import { getDataFromStorage } from 'utils/encryption';
import { logout } from 'utils/auth';
import { useDispatch } from 'react-redux';

function Header({ toggleSidebar }) {
  const dispatch = useDispatch();
  const { orgName = '' } =
    getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
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
        <span className="hidden md:block text-gray-700">
          Welcome, {orgName}
        </span>

        <button
          onClick={handleLogout}
          className="text-[#00A4E1] hover:text-red-500 cursor-pointer"
        >
          <ArrowRightOnRectangleIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}

export default Header;
