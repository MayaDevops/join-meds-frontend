
 
import React from 'react';
// import { Button } from 'antd';
import { AboutUsImg } from '../../../assets';

function About() {
  return (
    <div className="w-full px-6 py-12 flex flex-col gap-16 items-center">
      {/* Top: Image and Text Content */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-14">
        {/* Left: Image for large screens */}
        <div className="hidden lg:block">
          <img
            src={AboutUsImg}
            alt="Kids Eating Food"
            className="w-[610px] h-[400px] -scale-x-100 object-cover"
          />
        </div>

        {/* Right: Text content */}
        <div className="w-full max-w-[600px] h-auto p-4 bg-white text-black flex flex-col gap-4 overflow-hidden">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-[220px] h-[32px] text-sm font-bold text-white px-3 py-1 rounded bg-[#00A9B4] text-[#006A71]">
              Why Medland
            </span>
            <div className="w-12 h-[2px] bg-[#00A9B4]" />
          </div>
          <h2 className="text-[32px] font-bold leading-snug">
            What Makes Medland Stand Out
          </h2>

          {/* Image for mobile & tablet only */}
          <div className="block lg:hidden">
            <img
              // src={KidsEatingFood}
              alt="Kids Eating Food"
              className="w-full max-w-[610px] h-[400px] object-cover -scale-x-100"
            />
          </div>
{/* 
          <p className="text-md font-normal leading-snug text-gray-800 mt-4">
          </p> */}
          <p className="text-md font-normal leading-snug text-gray-800">
            At Medland, we are committed to shaping academic success through a strategic, student-focused, and supportive approach. Here's what sets us apart.
            Our meticulously designed resources ensure concept clarity and exam readiness, leading to outstanding results.
            We prioritize each student's unique learning style, offering personalized support and mentorship to help them thrive.
            With small batch sizes and dedicated faculty, every student receives the guidance and support they need to excel.
            Our peaceful and distraction-free setting fosters deep focus and an ideal atmosphere for effective learning.Our peaceful and
            distraction-free setting fosters deep focus and an ideal atmosphere for effective learning.Frequent mock exams simulate real test conditions,
            helping students build confidence and track their progress.
          </p>
          <div>
            {/* <Button
              style={{
                backgroundColor: '#373F50',
                paddingLeft: 32,
                paddingRight: 32,
                height: 44,
                borderRadius: 8,
                fontWeight: 500,
                fontSize: 14
              }}
              type="primary"
            >
              Find out more
            </Button> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
