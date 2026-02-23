import Nav from "../Nav";
import Title from "./Title";
import Video from "./Video";
import "../../styles/homeMain.css";
import { useState } from "react";
import Spotlight from "./Spotlight";

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleVideoChange = () => {
    setSlide((prev) => (prev + 1) % 3);
    setProgress(0);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="sticky top-0 left-0 w-full z-50">
        <Nav />
      </div>

      <div className="flex w-full overflow homeMain">
        <Video
          slide={slide}
          setSlide={handleVideoChange}
          setProgress={setProgress}
          progress={progress}
          className="z-10 w-1/2 flex items-center justify-center clip-left relative"
        />
        <Title
          slide={slide}
          setSlide={handleVideoChange}
          setProgress={setProgress}
          progress={progress}
          className="z-10 w-1/2 bg-black flex flex-col items-center justify-center gap-16 clip-right text-white"
        />
      </div>

      <div className="z-10 w-full min-h-screen spotlight flex flex-col items-center justify-start pt-24">
        <Spotlight />
      </div>
    </div>
  );
};

export default Home;
