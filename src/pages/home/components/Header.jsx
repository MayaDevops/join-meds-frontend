import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { bgHome, JoinMedsLogo } from "assets";
import { useNavigate } from "react-router-dom";
function Header({ onNavigate, refs }) {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [jobMenuOpen, setJobMenuOpen] = useState(false); // ✅ NEW

  return (
    <div
      className="
        w-full sticky top-0 z-[200]
        text-white flex items-center justify-between
        px-6 lg:px-20 py-4
      "
      style={{
        backgroundImage: `url(${bgHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* LOGO */}
      <img
        src={JoinMedsLogo}
        alt="JoinMeds Logo"
        className="h-12 cursor-pointer"
        onClick={() => onNavigate({ ref: refs.homeRef, name: "home" })}
      />

      {/* ================= DESKTOP MENU ================= */}
      <div className="hidden lg:flex gap-12 text-sm font-semibold items-center">
        <p
          className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.homeRef, name: "home" })}
        >
          Home
        </p>

        {/* Desktop Dropdown */}
        <div className="relative group">
          <p className="cursor-pointer">For Job Seekers</p>

          <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
            <div className="bg-[#35529c] text-white shadow-lg rounded-md py-2 w-48">
              <p
                className="px-4 py-2 hover:bg-[#1c4c8c] cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.joinmeds.app",
                    "_blank"
                  )
                }
              >
                Play Store
              </p>

              <p
                className="px-4 py-2 hover:bg-[#1c4c8c] cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://apps.apple.com/in/app/joinmeds/id6760744098",
                    "_blank"
                  )
                }
              >
                App Store
              </p>
            </div>
          </div>
        </div>

        <p
          className="cursor-pointer"
          onClick={() => navigate("/ui/join-meds/login")}
        >
          For Employers
        </p>

        <p
          className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.whyRef, name: "why" })}
        >
          Why Choose Us
        </p>

        <p
          className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.aboutRef, name: "about" })}
        >
          About
        </p>

        <p
          className="cursor-pointer"
          onClick={() => onNavigate({ ref: refs.contactRef, name: "contact" })}
        >
          Contact
        </p>
      </div>

      {/* ================= MOBILE BUTTON ================= */}
      <button className="block lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#002b5c]/95 text-white p-6 flex flex-col gap-6 lg:hidden">

          <p
            onClick={() => {
              onNavigate({ ref: refs.homeRef, name: "home" });
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            Home
          </p>

          {/* ✅ Job Seekers with submenu */}
          <div>
            <p
              className="cursor-pointer flex justify-between items-center"
              onClick={() => setJobMenuOpen(!jobMenuOpen)}
            >
              For Job Seekers
              <span className="text-lg">
                {jobMenuOpen ? "−" : "+"}
              </span>
            </p>

            {jobMenuOpen && (
              <div className="mt-3 ml-4 flex flex-col gap-3 text-sm">
                <p
                  className="cursor-pointer hover:text-[#00A4E1]"
                  onClick={() => {
                    window.open(
                      "https://play.google.com/store/apps/details?id=com.joinmeds.app",
                      "_blank"
                    );
                    setOpen(false);
                    setJobMenuOpen(false);
                  }}
                >
                  Play Store
                </p>

                <p
                  className="cursor-pointer hover:text-[#00A4E1]"
                  onClick={() => {
                    window.open(
                      "https://apps.apple.com/in/app/joinmeds/id6760744098",
                      "_blank"
                    );
                    setOpen(false);
                    setJobMenuOpen(false);
                  }}
                >
                  App Store
                </p>
              </div>
            )}
          </div>

          <p
            onClick={() => {
              navigate("/ui/join-meds/login");
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            For Employers
          </p>

          <p
            onClick={() => {
              onNavigate({ ref: refs.whyRef, name: "why" });
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            Why Choose Us
          </p>

          <p
            onClick={() => {
              onNavigate({ ref: refs.aboutRef, name: "about" });
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            About
          </p>

          <p
            onClick={() => {
              onNavigate({ ref: refs.contactRef, name: "contact" });
              setOpen(false);
            }}
            className="cursor-pointer"
          >
            Contact
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;