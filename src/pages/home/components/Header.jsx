import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { bgHome, JoinMedsLogo } from "assets";
import { useNavigate } from "react-router-dom";
import { playStoreUrl } from "../constants";


function Header({ onNavigate, refs }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        w-full sticky top-0 z-[200]
        text-white flex items-center justify-between
        px-6 lg:px-20 py-4
      "
      style={{
        backgroundImage: `url(${bgHome})`,   // ⭐ APPLY BG IMAGE HERE
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* LOGO */}
      <img src={JoinMedsLogo} alt="JoinMeds Logo" className="h-12 cursor-pointer"
        onClick={() => onNavigate({ ref: refs.homeRef, name: "home" })}
      />

      {/* DESKTOP MENU */}
      <div className="hidden lg:flex gap-12 text-sm font-semibold">
        <p className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.homeRef, name: "home" })}>Home</p>

        <p
          className="cursor-pointer"
          onClick={() => window.open(playStoreUrl, "_blank")}
        >
          For Job Seekers
        </p>

        <p
          className="cursor-pointer"
          onClick={() => navigate("/ui/join-meds/login")}
        >
          For Employers
        </p>

        <p className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.whyRef, name: "why" })}>Why Choose Us</p>

        <p className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.aboutRef, name: "about" })}>About</p>

        <p className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.contactRef, name: "contact" })}>Contact</p>
      </div>

      {/* HAMBURGER BUTTON */}
      <button className="block lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#002b5c]/90 text-white p-6 flex flex-col gap-6 lg:hidden">

          <p onClick={() => { onNavigate({ ref: refs.homeRef, name: "home" }); setOpen(false); }}
            className="cursor-pointer">Home</p>

          <p
           onClick={() => { window.open(playStoreUrl, "_blank"); setOpen(false); }}
            className="cursor-pointer"
          >
            For Job Seekers
          </p>

          <p
            onClick={() => { navigate("/ui/join-meds/login"); setOpen(false); }}
            className="cursor-pointer"
          >
            For Employers
          </p>

          <p onClick={() => { onNavigate({ ref: refs.whyRef, name: "why" }); setOpen(false); }}
            className="cursor-pointer">Why Choose Us</p>

          <p onClick={() => { onNavigate({ ref: refs.aboutRef, name: "about" }); setOpen(false); }}
            className="cursor-pointer">About</p>

          <p onClick={() => { onNavigate({ ref: refs.contactRef, name: "contact" }); setOpen(false); }}
            className="cursor-pointer">Contact</p>

        </div>
      )}
    </div>
  );
}

export default Header;
