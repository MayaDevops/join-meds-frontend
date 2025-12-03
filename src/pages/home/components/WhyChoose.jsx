import React from "react";
import { CheckCircle } from "lucide-react"; // tick icon

const features = [
  {
    title: "1. Built Exclusively for Health Professionals",
    desc: "JoinMeds is designed only for the healthcare community—ensuring every feature, connection, and opportunity aligns with your profession."
  },
  {
    title: "2. Verified Global Job Opportunities",
    desc: "Access trusted and authenticated job openings from accredited hospitals, healthcare institutions, and medical recruiters worldwide."
  },
  {
    title: "3. Professional Networking Made Easy",
    desc: "Healthcare employers can discover qualified, job-ready candidates through a streamlined and transparent hiring process."
  },
  {
    title: "4. Showcase Your Skills with Confidence",
    desc: "Create a detailed professional profile, upload your CV, highlight certifications, achievements, and clinical experience—all in one place."
  },
  {
    title: "5. Trusted Talent for Employers",
    desc: "Connect with industry experts, employers, and fellow professionals to build a strong, career-enhancing network."
  },
  {
    title: "6. Secure & User-Friendly Platform",
    desc: "Your data is protected with advanced security, giving you a safe and seamless experience while exploring career opportunities."
  },
  {
    title: "7. Global Reach, Local Support",
    desc: "Whether you aspire to work locally or internationally, JoinMeds connects you to opportunities that match your skills and goals."
  }
];

function WhyChoose() {
  return (
    <div className="w-full px-6 lg:px-16 py-12">

      {/* Heading */}
      <h2
        className="text-2xl lg:text-3xl font-bold mb-8"
        style={{ color: "#00A4E1" }}
      >
        Why Choose JoinMeds?
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="
              p-6 rounded-2xl bg-white 
              flex flex-col gap-3
            "
            style={{
              border: "1px solid transparent",
              borderRadius: "16px",
              backgroundClip: "padding-box, border-box",
              backgroundOrigin: "padding-box, border-box",
              backgroundImage:
                "linear-gradient(#fff, #fff), linear-gradient(90deg, #C5ECFF, #C5ECFF)"
            }}
          >
            {/* Tick icon on FIRST line */}
            <div className="flex items-center">
              <CheckCircle className="text-[#00A4E1]" size={22} />
            </div>

            {/* Title on SECOND line */}
            <h3 className="font-semibold text-[16px] text-[#00A4E1] leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[#6D6D6D] text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChoose;
