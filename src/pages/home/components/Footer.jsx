import React from "react";
import {
  FacebookIcon,
  FB,
  insta,
  InstagramIcon,
  LinkedInIcon,
  map,
  Twitter,
  Youtube,
} from "../../../assets";
import logo from "../../../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-[#1B3C74] text-white pt-12 pb-6 px-6 lg:px-20">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT - Logo + Address + Contact */}
        <div className="space-y-6">
          <img src={logo} alt="JoinMeds Logo" className="w-20" />

          <div>
            <h3 className="font-semibold tracking-wide">OFFICE | INDIA</h3>
            <p className="text-sm mt-3 leading-6">
              1ST Floor, Iconic Arcade,<br />
              Near Alpha Gym, PO, Kalluvathukkal,<br />
              Kollam, Kerala, PIN 691578, India
            </p>
          </div>

          <div>
            <h3 className="font-semibold tracking-wide">FOR ENQUIRIES</h3>
            <p className="text-sm mt-3 leading-6">+91 80866 64415</p>
            <p className="text-sm mt-1 leading-6">joinmedsofficial@gmail.com</p>
          </div>
        </div>

        {/* CENTER - Useful Links */}
        <div className="space-y-4 pl-4 md:pl-10 mt-20">
          <ul className="space-y-4 text-sm">
            <li>
              <a
                href="/ui/join-meds/login"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                ➤ For Job Seekers
              </a>
            </li>

            <li>
              <a
                href="/ui/join-meds/login"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                ➤ For Employers
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                ➤ About Us
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 flex items-center gap-2"
              >
                ➤ Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT - Map Box */}
        <div className="flex justify-center md:justify-end">
          <img
            src={map}
            alt="Map"
            className="rounded-xl shadow-lg w-[260px] h-[260px] object-cover"
          />
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mt-10 mb-6">
        <img
          src={FB}
          alt="Map"
        // className="rounded-xl shadow-lg w-[260px] h-[260px] object-cover"
        />
        <img
          src={insta}
          alt="Map"
        // className="rounded-xl shadow-lg w-[260px] h-[260px] object-cover"
        /><img
          src={Twitter}
          alt="Map"
        // className="rounded-xl shadow-lg w-[260px] h-[260px] object-cover"
        /><img
          src={Youtube}
          alt="Map"
        // className="rounded-xl shadow-lg w-[260px] h-[260px] object-cover"
        />
      </div>

      {/* COPYRIGHT BAR */}
      <div className="border-t border-[#284a78] pt-4 text-center text-sm text-gray-300">
        Copyright ©2025 joinmeds. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
