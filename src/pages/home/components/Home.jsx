import React from "react";
import { Search, Globe, ArrowRight, Menu, X } from "lucide-react";
import { bannerBg, bgHome } from "assets";

function Home() {

  return (
    <div
      className="w-full flex flex-col relative"
      style={{
        height: "75vh",
        minHeight: "825px",
        maxHeight: "900px",
        backgroundImage: `url(${bgHome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <div
        className="
          w-full max-w-[1900px] mx-auto px-6 lg:px-20
          flex flex-col lg:flex-row
          justify-between items-center gap-4
        "
      >
        {/* LEFT TEXT */}
        <div className="text-white max-w-2xl">
          <div
            className="
              inline-block text-white text-md px-6 py-2 mb-4
              rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none
            "
            style={{
              background: "linear-gradient(90deg, #2ECC7199 0%, #2ECC71CC 100%)",
            }}
          >
            TRUSTED TALENT. FASTER HIRING.
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Find The Right Talent <br />
            Faster and Smarter <br />
            With <span className="text-[#cde2ff]">JoinMeds</span>
          </h1>

          <p className="text-lg text-white/90 mb-6 max-w-md">
            Streamlined hiring designed exclusively for healthcare organisations.
          </p>

          <button className="bg-[#00A4E1] text-[#0a4da3] px-6 py-3 rounded-full flex items-center gap-2 font-semibold shadow-md hover:bg-blue-50">
            Get Started <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end pr-10">
          <div className="absolute w-[420px] h-[420px] lg:w-[470px] lg:h-[470px] bg-blue-400/20 rounded-full blur-3xl right-0"></div>

          <img
            src={bannerBg}
            alt="Doctor"
            className="relative z-10 w-[300px] lg:w-[674px] object-contain"
          />
        </div>
      </div>

      {/* ================= SEARCH BAR (BOTTOM CENTER) ================= */}
      <div
        className="
          absolute left-1/2 bottom-0
          transform -translate-x-1/2 translate-y-1/2
          w-full flex justify-center px-6 z-50
        "
      >
        <div className="bg-white shadow-xl rounded-full flex items-center px-8 py-3 w-full max-w-4xl gap-6">
          <div className="flex items-center flex-1 gap-3">
            <Search className="text-gray-600" size={20} />
            <input
              type="text"
              placeholder="Search job"
              className="w-full outline-none"
            />
          </div>

          <div className="h-6 w-[1px] bg-gray-300" />

          <div className="flex items-center flex-1 gap-3">
            <Globe className="text-gray-600" size={20} />
            <select className="w-full outline-none cursor-pointer">
              <option>Select Country</option>
              <option>India</option>
              <option>UAE</option>
              <option>Qatar</option>
            </select>
          </div>

          <div className="h-6 w-[1px] bg-gray-300" />

          <button className="bg-[#0a4da3] hover:bg-[#083e85] text-white w-12 h-12 rounded-full flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
