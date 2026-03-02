import { PEXELS_API_KEY } from "../../API/pexelsAPI";
import { useEffect, useState, useRef } from "react";

const Video = ({ className = "", setSlide, slide, setProgress, progress }) => {
  const [videos, setVideos] = useState([]);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

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
        const responses = await Promise.all([
          fetch("https://api.pexels.com/videos/videos/30514807", {
            headers: { Authorization: PEXELS_API_KEY },
          }),
          fetch("https://api.pexels.com/videos/videos/5275686", {
            headers: { Authorization: PEXELS_API_KEY },
          }),
          fetch("https://api.pexels.com/videos/videos/8695148", {
            headers: { Authorization: PEXELS_API_KEY },
          }),
        ]);
        const data = await Promise.all(responses.map((res) => res.json()));
        setVideos(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, []);

  const video = videos[slide];
  const videoSrc = video?.video_files?.[0]?.link;

  return (
    <div className={`relative w-1/2 h-full bg-black ${className}`}>
      <div className="clip-wrapper absolute inset-0 w-full h-full overflow-hidden">
        {!video && <div className="absolute inset-0 bg-black animate-pulse" />}

        {videoSrc && (
          <video
            key={videoSrc}
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out"
            onLoadedData={(e) => (e.target.style.opacity = 1)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleTimeUpdate}
            onEnded={setSlide}
          />
        )}
      </div>

      <div className="absolute bottom-6 right-40 w-12 h-12 z-20">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 80 80"
        >
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="white"
            strokeOpacity="0.2"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
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
