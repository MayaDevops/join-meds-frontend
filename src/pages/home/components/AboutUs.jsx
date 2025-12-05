
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
                    <p>
                        JoinMeds is a leading medical recruitment platform connecting healthcare professionals
                        with hospitals, clinics, and organizations across India. Designed for doctor jobs, nurse jobs,
                        and allied health careers, it simplifies hiring and job search in the healthcare industry.
                        Employers can post vacancies and quickly find qualified candidates,
                        while professionals can showcase skills and access diverse opportunities.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        A product of <strong>Medland Educational and Placement Services Private Limited</strong>, JoinMeds reflects a vision to
                        advance healthcare staffing, medical education, and career placement.
                        By bridging talent and opportunity, we strengthen the healthcare ecosystem and support better
                        patient care through well‑staffed teams.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        JoinMeds makes healthcare career development simple, secure, and globally accessible.
                    </p>
                </div>

            </div>
        </div >
    );
}

export default AboutUs;
