import React, { useState } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // or any hamburger icon
import { LogoImg } from '../../../assets';
import { t } from 'pages/common/components';

function Header({ onNavigate, refs, activeSection, scrollProgress }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (section, ref) => {
    onNavigate({ ref, name: section });
    setIsMenuOpen(false);
  };
  

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 sm:px-8 h-[65px]">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={LogoImg} alt="logo" width="70px" />
          <span className="font-semibold text-[#323232] text-sm sm:text-base whitespace-nowrap">
            {t('MedLand Education and Placement Service')}
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10 text-[#323232] text-sm font-medium">
          <span className={`cursor-pointer hover:underline ${activeSection === 'home' ? 'text-[#FF6F61]' : ''}`} onClick={() => handleNav('home', refs.homeRef)}>Home</span>
          <span className={`cursor-pointer hover:underline ${activeSection === 'about' ? 'text-[#FF6F61]' : ''}`} onClick={() => handleNav('about', refs.aboutRef)}>About Us</span>
          <span className={`cursor-pointer hover:underline ${activeSection === 'contact' ? 'text-[#FF6F61]' : ''}`} onClick={() => handleNav('contact', refs.contactRef)}>Contact Us</span>
          {/* <span className={`cursor-pointer hover:underline ${activeSection === 'features' ? 'text-[#FF6F61]' : ''}`} onClick={() => handleNav('features', refs.featuresRef)}>Key Features</span>
          <span className={`cursor-pointer hover:underline ${activeSection === 'objectives' ? 'text-[#FF6F61]' : ''}`} onClick={() => handleNav('objectives', refs.objectivesRef)}>Objectives</span>
          <span className="cursor-pointer hover:underline">Help</span> */}
        </nav>

        {/* Sign In Button */}
        <div className="hidden lg:flex ml-2">
          <Button
            style={{ backgroundColor: '#00a4e1' }}
            type="primary"
            onClick={() => navigate('/ui/join-meds/register')}
          >
            Register
          </Button>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col px-4 pb-4 bg-white text-[#323232] text-sm font-medium gap-4 shadow">
          <span onClick={() => handleNav('home', refs.homeRef)}>Home</span>
          <span onClick={() => handleNav('about', refs.aboutRef)}>About Us</span>
          <span onClick={() => handleNav('contact', refs.contactRef)}>Contact Us</span>
          {/* <span onClick={() => handleNav('features', refs.featuresRef)}>Key Features</span>
          <span onClick={() => handleNav('objectives', refs.objectivesRef)}>Objectives</span>
          <span>Help</span> */}
          <Button
            style={{ backgroundColor: '#00a4e1', marginTop: '8px' }}
            type="primary"
            onClick={() => {
              navigate('/ui/join-meds/register');
              setIsMenuOpen(false);
            }}
          >
            Register
          </Button>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-[#8ACCD5]"
        style={{ width: `${scrollProgress}%`, transition: 'width 0.2s ease-out' }}
      />
    </header>
  );
}

export default Header;
