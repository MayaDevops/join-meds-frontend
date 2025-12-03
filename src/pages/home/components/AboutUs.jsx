
import React from "react";
import { Play } from "lucide-react"; // play icon
import { aboutImg1, aboutImg2 } from "assets"; 
// rename these imports to match your actual asset names

function AboutUs() {
  return (
    <div className="w-full bg-[#F8FBFF] py-16 px-6 lg:px-20 border-t border-b border-[#C5ECFF]">

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1400px] mx-auto">

        {/* ---------------- LEFT IMAGES ---------------- */}
        <div className="flex flex-col gap-8 w-full">

          {/* Large top image */}
          <img
            src={aboutImg1}
            alt="Doctors"
            className="w-full h-[280px] lg:h-[330px] object-cover rounded-xl shadow-md"
          />

          {/* Small bottom image with overlay */}
          <div className="relative w-full h-[380px]">
            <img
              src={aboutImg2}
              alt="Medical Student"
              className="w-full h-full object-cover rounded-xl shadow-md"
            />

            
          </div>
        </div>

        {/* ---------------- RIGHT TEXT AREA ---------------- */}
        <div className="flex flex-col gap-4">
          <p className="text-[#323232] font-bold">About Us</p>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#00A4E1] leading-snug">
            We Are Always Ensure Best <br /> Medical Treatment
          </h2>

          <p className="text-gray-700 leading-relaxed">
            JoinMeds is an employment-oriented social networking service built exclusively for
            health professionals. The platform helps nurses, doctors, therapists, technicians,
            and other medical experts showcase their skills, upload CVs, and connect with
            accredited hospitals and recruiters worldwide.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Health professionals can explore verified job openings, build meaningful professional
            networks, and grow their careers, while medical service sector employers gain access
            to a trusted pool of qualified, job-ready candidates.
          </p>

          <p className="text-gray-700 leading-relaxed">
            JoinMeds makes healthcare career development simple, secure, and globally accessible.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutUs;
