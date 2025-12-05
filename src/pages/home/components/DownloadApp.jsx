import { downloadApp } from "assets";
import React from "react";
function DownloadApp() {
    return (
        <div className="w-full px-6 lg:px-16 py-16 bg-white">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT — SINGLE IMAGE */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src={downloadApp}
                        alt="JoinMeds App"
                        className="w-[260px] md:w-[340px] lg:w-[400px]"
                    />
                </div>

                {/* RIGHT SECTION */}
                <div className="flex flex-col gap-6">

                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Download the{" "}
                        <span style={{ color: "#00A4E1" }}>JoinMeds</span> App
                    </h2>

                    <p className="text-gray-600">
                        Get the link to download the app
                    </p>

                    {/* PHONE INPUT + BUTTON */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full">

                        {/* INPUT BOX */}
                        <div className="flex items-center w-full sm:w-60 border border-gray-300 rounded-xl px-4 h-12 bg-white">
                            <span className="text-gray-600 mr-3">+91</span>
                            <input
                                type="text"
                                placeholder="Enter phone number"
                                className="w-full outline-none text-sm"
                            />
                        </div>

                        {/* FIXED RESPONSIVE BUTTON */}
                        <button
                            className="
      bg-[#00A4E1] text-white 
      px-6 h-12 
      rounded 
      font-medium text-sm 
      hover:bg-[#0086b8] 
      transition
      whitespace-nowrap
      w-full sm:w-28
    "
                        >
                            Send SMS
                        </button>
                    </div>

                    {/* STORE BUTTONS */}
                    <div className="flex gap-4 mt-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                            alt="Google Play"
                            className="h-12 cursor-pointer"
                        />

                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="h-12 cursor-pointer"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default DownloadApp;
