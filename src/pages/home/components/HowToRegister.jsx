import React, { useState } from "react";
import { Play, Youtube } from "lucide-react";
import { howToRegisterThumbnail } from "assets";

const YOUTUBE_VIDEO_ID = "bO1V7_t6uEI";
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`;

function HowToRegister() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8 text-center">
        <p className="text-[#323232] font-bold">How to Register</p>

        <h2 className="text-3xl lg:text-4xl font-bold text-[#00A4E1] leading-snug">
          Watch How to Register on JoinMeds
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-2xl">
          Follow this quick video walkthrough to learn how to create your
          account and get started on JoinMeds.
        </p>

        <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-md bg-black">
          {playing ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
              title="How to Register on JoinMeds"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative w-full h-full cursor-pointer"
              aria-label="Play How to Register video"
            >
              <img
                src={howToRegisterThumbnail}
                alt="How to Register on JoinMeds"
                className="w-full h-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                <span className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-[#00A4E1]/90 group-hover:bg-[#00A4E1] shadow-lg transition-colors">
                  <Play className="text-white" size={32} fill="white" />
                </span>
              </span>
            </button>
          )}
        </div>

        <a
          href={YOUTUBE_WATCH_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#00A4E1] hover:bg-[#008EC4] text-white font-semibold px-6 py-3 transition-colors"
        >
          <Youtube size={20} />
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}

export default HowToRegister;
