import { PEXELS_API_KEY } from "../../API/pexelsAPI";
import { useEffect, useState } from "react";

const Video = ({ className = "" }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          "https://api.pexels.com/videos/videos/30514807",
          {
            headers: {
              Authorization: PEXELS_API_KEY,
            },
          },
        );

        const data = await response.json();
        console.log(data);
        setVideo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideo();
  }, []);

  if (!video) return <div>Loading video...</div>;

  return (
    <div className={className}>
      <video
        data-testid="video-element"
        src={video.video_files[0].link}
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Video;
