
import React from 'react';

function ContactUs() {
  return (
    <div className="w-full px-4 md:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Contact Us Button & Underline */}
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-[#6DC1C7] text-white font-semibold text-sm px-4 py-2 rounded">CONTACT US</button>
          <div className="w-24 h-[2px] bg-[#1F9A9C]" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-[#1A1A1A] mb-10">
          We are looking forward to your enquiry
        </h1>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-[#3C3C3C] mb-2">Name</label>
            <input type="text" className="border-b border-gray-400 focus:outline-none py-1" />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-[#3C3C3C] mb-2">E-mail</label>
            <input type="email" className="border-b border-gray-400 focus:outline-none py-1" />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-[#3C3C3C] mb-2">Subject</label>
            <input type="text" className="border-b border-gray-400 focus:outline-none py-1" />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-[#3C3C3C] mb-2">Phone number</label>
            <input type="text" className="border-b border-gray-400 focus:outline-none py-1" />
          </div>

          {/* Message - Full Width */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-[#3C3C3C] mb-2">Message</label>
            <textarea rows="4" className="border-b border-gray-400 focus:outline-none py-1 resize-none" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
