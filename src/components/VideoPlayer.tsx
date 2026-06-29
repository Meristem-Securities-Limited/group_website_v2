"use client";

import { useRef, useState } from "react";
import { Play, PlayCircle } from "iconsax-react";
import Image from "next/image";

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoPlayer({ videoUrl, thumbnailUrl }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="lg:p-8 w-full">
      <div className="w-full aspect-video bg-gradient-to-t from-[#E7E9E6] to-[#c4e199] relative rounded-xl overflow-hidden h-full">
        {!isPlaying && (
          <div className="bg-gradient-to-t from-[#E7E9E6] to-[#c4e199] h-full w-full bg-red-400 relative">
            {/* Thumbnail */}
            <Image
              src={thumbnailUrl}
              alt="Video Thumbnail"
              className="w-full h-full object-contain p-10"
            />
            {/* Play Button Overlay */}

            <div className="absolute inset-0 flex items-center justify-center bg-secondary/50 bg-opacity-40 hover:bg-opacity-50 transition">
              {!!videoUrl && (
                <button
                  onClick={handlePlay}
                  className="bg-white rounded-full transition">
                  <PlayCircle
                    variant="Bold"
                    size={60}
                    color="green"
                  />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Video */}
        <video
          ref={videoRef}
          className={`w-full h-full aspect-video ${isPlaying ? "block" : "hidden"}`}
          controls
          preload="none">
          <source
            src={videoUrl}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
