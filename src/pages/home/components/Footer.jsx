
import {
  FacebookIcon, InstagramIcon, LinkedInIcon, medLandLogo
} from '../../../assets'; // Adjust the import path as necessary
import React from 'react';

function Fooder() {
  return (
    <footer className="bg-[#029dbc] text-white py-10 px-10 md:px-32">

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 max-w-md">
          <div className="flex items-center gap-3">
            <div className="">
              <img src={medLandLogo} alt="logo" width="200px" />
            </div>
            {/* <span className="font-semibold text-lg text-[#ffff]">
              
            </span> */}
          </div>
          <p className="text-sm text-[#ffff]">
            we are not here to sell you products, we sell value through our expertise.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 text-white mt-2">
            <FacebookIcon />
            
            <InstagramIcon />
            <LinkedInIcon />
          </div>
        </div>

        {/* Address */}
        <div className="text-sm text-[#ffff] leading-6">
          <p><strong className="text-white">Address:</strong><br />
            MEDLAND EDUCATION AND PLACEMENT SERVICE PRIVATE LIMITED,  ICONIC ARCADE,<br />
            FIRST FLOOR,  KALLUVATHUKKAL, KOLLAM, KOLLAM-691578, KERALA
          </p>
          <p className="mt-3">
            <strong className="text-white">Phone:</strong><br />
            <FacebookIcon />+918086664419, +917558885566
          </p>
          <p className="mt-3">
            <strong className="text-white">Email:</strong><br />
            medlandplacementservices@gmail.com
          </p>
        </div>

        {/* Links */}
        <div className="text-sm text-[#ffff]">
          <strong className="text-white">Quick Links</strong>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#4D8A8A] pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#5BBEBE]">
        <p className="text-white">Designed and Developed by <a href="https://www.revapi.co.in/" className="hover:text-white">revAPI</a>  - 2025 © All rights reserved</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="text-white">Terms & Conditions</a>
          <a href="#" className="text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Fooder;
