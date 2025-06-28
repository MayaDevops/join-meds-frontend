import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../assets/images/Logo.png';
import medLandLogo from '../../../assets/images/med-land-logo.jpg';

function OrganisationAuthLanding() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-[#D6F3FF] to-[#e9f9ff] p-10 flex-col pt-30">
        {/* Header */}
        <div className="text-center mt-6 mb-10">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome to <span className="font-bold text-[#2E97F0]">Join</span>
            <span className="font-bold text-[#00B5D8]">Meds</span> Organisation
          </h1>
          <p className="text-black-600 font-medium mt-2">
            Login/Sign Up to your Organisation Account
          </p>
        </div>

        {/* Content */}
        <div className="flex-grow flex items-start justify-center pt-10">
          <div className="space-y-10 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#00A4E1] text-2xl">📋</span>
              <p className="text-black text-xl font-semibold">
                Register Your Organization Easily & Start Hiring Top <br /> Healthcare Talent
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00A4E1] text-2xl">👨‍⚕️</span>
              <p className="text-black text-xl font-semibold">
                Hire Skilled Healthcare Professionals That Match <br /> Your Needs
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#00A4E1] text-2xl">🧠</span>
              <p className="text-black text-xl font-semibold">
                Smart Hiring Solutions for the Healthcare Industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-between p-8 pt-30">
        {/* Top Section */}
        <div className="flex flex-col items-center w-full">
          {/* Logo + Heading */}
          <div className="flex items-center gap-4 mb-6 flex-wrap justify-center">
            <img src={Logo} alt="JoinMeds Logo" className="w-30 h-15" />
            <h2 className="text-3xl font-bold text-gray-800">Organisation</h2>
          </div>

          {/* Buttons */}
          <div className="w-full max-w-sm px-4 space-y-4 mt-20">
            <button
              className="bg-[#00A4E1] hover:bg-[#008FCC] text-white font-semibold py-4 px-6 rounded-xl w-full text-2xl cursor-pointer"
              onClick={() => navigate('/ui/join-meds/login')}
            >
              Login
            </button>
            <button              
              style={{ borderColor: '#00A4E1' }}
              className="border-3 border-[#00A4E1] text-[#00A4E1] hover:bg-[#e6faff] font-semibold py-4 px-6 rounded-xl w-full text-2xl cursor-pointer"
              onClick={() => navigate('/ui/join-meds/register')}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 mb-6 flex justify-center">
          <img src={medLandLogo} alt="Medland Logo" className="h-20" />
        </div>
      </div>
    </div>
  );
}

export default OrganisationAuthLanding;
