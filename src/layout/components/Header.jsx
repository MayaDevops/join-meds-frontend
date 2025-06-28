
// Header.jsx
import { STORAGE_KEYS } from 'pages/common/constants';
import React from 'react';
import { getDataFromStorage } from 'utils/encryption';

function Header({ toggleSidebar }) {
  const { orgName = '' } = getDataFromStorage(STORAGE_KEYS.OFFICE_DETAILS, true) || {};

  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Hamburger for Mobile */}
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

      {/* Placeholder for right-side options */}
      <div className="hidden md:block">Welcome, {orgName}</div>
    </header>
  );
}

export default Header;

