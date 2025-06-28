import React from 'react';
import {
  HomeIcon,
  BriefcaseIcon,
  PhoneIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import JoinMedsLogo from '../../../assets/images/join_meds_side.png'; // ✅ Adjust path

const menuItems = [
  { name: 'Home', icon: HomeIcon, path: '/ui/join-meds/user/dashboard' },
  { name: 'Add Job', icon: BriefcaseIcon, path: '/ui/join-meds/register/profile' },
  { name: 'Contact', icon: PhoneIcon, path: '#' },
  { name: 'Profile', icon: UserCircleIcon, path: '#' },
  { name: 'Logout', icon: ArrowLeftOnRectangleIcon, path: '/' }
];

function Sidebar({ isOpen, toggle }) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth < 768) toggle(); // Close on mobile
  };

  return (
    <div
      className={`transition-all duration-300 bg-[#00A4E1] text-white z-40
        ${isOpen ? 'w-64' : 'w-16'}
        fixed md:relative top-0 left-0 h-screen flex flex-col justify-between
      `}
    >
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between p-4">
          {isOpen && <span className="text-lg font-bold">JoinMeds</span>}
          <button onClick={toggle} className="text-white hover:text-gray-200 cursor-pointer">
            ☰
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-6 space-y-2 px-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className="flex items-center gap-4 px-3 py-2 hover:bg-[#008FCC] rounded cursor-pointer"
            >
              {item.icon && <item.icon className="h-5 w-5 flex-shrink-0" />}
              {isOpen && <span className="whitespace-nowrap">{item.name}</span>}
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Logo */}
      <div className="w-full flex justify-center p-4">
        <img
          src={JoinMedsLogo}
          alt="JoinMeds Logo"
          className="w-60 h-60 object-cover rounded-xl shadow-lg border-2 border-white"
        />
      </div>
    </div>
  );
}

export default Sidebar;
