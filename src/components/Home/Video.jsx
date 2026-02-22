import { PEXELS_API_KEY } from "../../API/pexelsAPI";
import { useEffect, useState, useRef } from "react";

const Video = ({ className = "", setSlide, slide, setProgress, progress }) => {
  const [video, setVideo] = useState(null);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);

  // Constants for the circle
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (vid && vid.duration && !isNaN(vid.duration)) {
      const currentProgress = (vid.currentTime / vid.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (vid.paused) {
      vid.play();
      setIsPlaying(true);
    } else {
      vid.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          fetch("https://api.pexels.com/videos/videos/30514807", {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }),
          fetch("https://api.pexels.com/videos/videos/5275686", {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }),
          fetch("https://api.pexels.com/videos/videos/8695148", {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          }),
        ]);

        const data1 = await res1.json();
        const data2 = await res2.json();
        const data3 = await res3.json();

        if (slide === 0) setVideo(data1);
        else if (slide === 1) setVideo(data2);
        else setVideo(data3);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [slide]);

  const videoSrc = video?.video_files[0]?.link;

  if (!video) return <div className="text-white">Loading...</div>;

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        onEnded={setSlide}
        className="w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="absolute bottom-6 right-40 w-12 h-12">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="white"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            strokeLinecap="round"
          />
        </svg>

        <button
          onClick={togglePlay}
          className="absolute inset-0 m-auto flex items-center justify-center aspect-square rounded-full bg-white/10 backdrop-blur-sm text-white transition-all overflow-hidden"
          style={{ width: "80%", height: "80%" }}
        >
          <span className="text-[10px] font-bold leading-none translate-x-[1px]">
            {isPlaying ? "❚❚" : "▶"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Video;
