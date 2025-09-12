"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, ArrowRight } from "lucide-react";
// import { VideoThumbnail } from "../app/assets";
// import Image from "next/image";

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("youtube-player", {
        events: {
          onReady: () => {
            setPlayerReady(true);
            playerRef.current.playVideo();
          },
        },
      });
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (!playerRef.current) {
      // First time → show iframe
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  return (
    <section className="bg-white p-4">
      <div className="container bg-[url('/hero-pattern.svg')] bg-no-repeat bg-cover mx-auto">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-10 w-full bg-white/60">
          <button className="bg-emerald-800 border border-emerald-800 gap-4 text-white px-8 py-3 font-semibold hover:bg-emerald-800 transition-colors duration-200 flex items-center">
            <div className="hover:bg-white hover:text-emerald-900 text-white py-2">
              <ArrowRight className="h-4 w-4" />
            </div>
            RESEARCH PORTAL
          </button>
          <button className="border gap-4 border-gray-400 hover:bg-white text-gray-700 px-8 py-3 font-semibold transition-colors duration-200 flex items-center">
            <div className="bg-emerald-900 hover:text-emerald-900 text-white px-4 py-2">
              <ArrowRight className="h-4 w-4" />
            </div>
            WATCH 2025 OUTLOOK
          </button>
        </div>
        <div className="lg:max-w-6xl md:max-4xl mx-auto bg-green-700">
          <div
            className="relative rounded-2xl overflow-hidden from-emerald-50 to-teal-100"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}>
            <div className="relative aspect-video flex items-center justify-center">
              <iframe
                id="youtube-player"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/7FaCgvyYBwA?enablejsapi=1&rel=0`}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"></iframe>

              {showControls && (
                <button
                  onClick={togglePlay}
                  className={`w-20 h-20 bg-[#09090966] animate-pulse bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110`}>
                  {isPlaying ? (
                    <Pause
                      color="white"
                      fill="white"
                      size={32}
                    />
                  ) : (
                    <Play
                      color="white"
                      fill="white"
                      size={32}
                    />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
