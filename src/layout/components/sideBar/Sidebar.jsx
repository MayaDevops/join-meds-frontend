import React, { useEffect, useRef, useState } from 'react';
import {
  HomeIcon,
  BriefcaseIcon,
  PhoneIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  DocumentChartBarIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import JoinMedsLogo from '../../../assets/images/join_meds_side.png';
import { Tooltip } from 'antd';

const menuItems = [
  { name: 'Home', icon: HomeIcon, path: '/ui/join-meds/user/dashboard', Tooltip: 'Dashboard' },
  { name: 'Add Job', icon: BriefcaseIcon, path: '/ui/join-meds/register/profile', Tooltip: 'Add Job' },
  { name: 'Contact', icon: PhoneIcon, path: '/ui/join-meds/user/profile', Tooltip: 'Contact' },
  { name: 'Profile', icon: UserCircleIcon, path: '/ui/join-meds/user/profile', Tooltip: 'Profile' },
  { name: 'Report', icon: DocumentChartBarIcon, path: '/ui/join-meds/user/reports', Tooltip: 'Reports' },
  { name: 'Logout', icon: ArrowLeftOnRectangleIcon, path: '/', Tooltip: 'Logout' }
];

function Sidebar({ isOpen, toggle }) {
  const navigate = useNavigate();
  const sidebarRef = useRef(null);
  const [loggingOut, setLoggingOut] = useState(false);

  const handleNavigation = (item) => {
    if (item.name === 'Logout') {
      setLoggingOut(true);
      setTimeout(() => {
        localStorage.clear();
        navigate('/');
      }, 2000);
      return;
    }

    if (item?.name === 'Add Job') {
      navigate('/ui/join-meds/register/profile', { state: { selectedJob: null } });
    } else {
      navigate(item.path);
    }

    if (window.innerWidth < 768) toggle(); // Auto-close on mobile
  };

  // ✅ Detect clicks outside sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        if (isOpen && window.innerWidth < 768) {
          toggle();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, toggle]);

  const isMobile = window.innerWidth < 768;
  if (isMobile && !isOpen) return null;

  return (
    <>
      <div
        ref={sidebarRef}
        className={`transition-all duration-300 bg-[#00A4E1] text-white z-50
          ${isOpen ? 'w-64' : 'w-16'}
          fixed md:relative top-0 left-0 h-screen flex flex-col justify-between shadow-md
        `}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between p-4">
            {isOpen && <span className="text-lg font-bold">JoinMeds</span>}
            <button onClick={toggle} className="text-white hover:text-gray-200 cursor-pointer">
              ☰
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-6 space-y-2 px-2">
            {menuItems.map((item) => {
              const content = (
                <div
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className="flex items-center gap-4 px-3 py-2 hover:bg-[#008FCC] rounded cursor-pointer"
                >
                  {item.icon && <item.icon className="h-5 w-5 flex-shrink-0" />}
                  {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
                </div>
              );

              return !isOpen ? (
                <Tooltip title={item.Tooltip} placement="right" key={item.name}>
                  {content}
                </Tooltip>
              ) : (
                content
              );
            })}
          </nav>
        </div>

        {/* Bottom Logo */}
        {isOpen && (
          <div className="w-full flex justify-center p-4">
            <img
              src={JoinMedsLogo}
              alt="JoinMeds Logo"
              className="w-60 h-60 object-cover rounded-xl shadow-lg border-2 border-white"
            />
          </div>
        )}
      </div>

      {/* 🔁 Logging Out Loader */}
      {loggingOut && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90">
          <div
            className="h-16 w-16 border-4 border-t-transparent rounded-full animate-spin mb-4"
            style={{
              borderTopColor: '#00A4E1',   // Cyan
              borderRightColor: '#1E90FF', // Blue
              borderBottomColor: '#20C997', // Teal
              borderLeftColor: '#00A4E1'
            }}
          />
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            JoinMeds Portal - Logging out...
          </h1>
        </div>
      )}
    </>
  );
}

export default Sidebar;
